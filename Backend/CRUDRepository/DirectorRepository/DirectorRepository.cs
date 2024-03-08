using CRUDModels.DirectorModel;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUDRepository.DirectorRepository
{
    public class DirectorRepository : IDirector
    {
        private readonly IConfiguration _configuration;

        public DirectorRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public List<DirectorViewModel> GetDirectors()
        {
            List<DirectorViewModel> directors = new List<DirectorViewModel>();

            using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                try
                {
                    using (SqlCommand command = new SqlCommand("up_GetDirectors", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;

                        connection.Open();

                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                DirectorViewModel director = new DirectorViewModel();
                                director.PKDirector = Convert.ToInt32(reader["PKDirector"]);
                                director.Name = reader["Name"].ToString();
                                director.Age = Convert.ToInt32(reader["Age"]);
                                director.Active = Convert.ToBoolean(reader["Active"]);
                                director.LastUpdated = Convert.ToDateTime(reader["LastUpdated"]);

                                directors.Add(director);
                            }
                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error al obtener los directores: " + ex.Message);
                }
            }

            return directors;
        }


        public void AddDirector(DirectorViewModel directorModel)
        {
            using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                try
                {
                    using (SqlCommand command = new SqlCommand("up_AddDirector", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;

                        command.Parameters.AddWithValue("@Name", directorModel.Name);
                        command.Parameters.AddWithValue("@Age", directorModel.Age);

                        connection.Open();
                        command.ExecuteNonQuery();
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error al añadir los directores: " + ex.Message);
                }
            }
        }


        public void UpdateDirector(DirectorViewModel directorModel)
        {
            using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                try
                {
                    using (SqlCommand command = new SqlCommand("up_UpdateDirector", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;


                        command.Parameters.AddWithValue("@PKDirector", directorModel.PKDirector);
                        command.Parameters.AddWithValue("@Name", directorModel.Name);
                        command.Parameters.AddWithValue("@Age", directorModel.Age);
                        command.Parameters.AddWithValue("@Active", directorModel.Active);

                        connection.Open();
                        command.ExecuteNonQuery();
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error al editar los directores: " + ex.Message);
                }
            }
        }

        public void RemoveDirector(DirectorViewModel directorModel)
        {
            using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                try
                {
                    using (SqlCommand command = new SqlCommand("up_RmvDirector", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;

                        // Agregar parámetros
                        command.Parameters.AddWithValue("@PKDirector", directorModel.PKDirector);
                        command.Parameters.AddWithValue("@Active", directorModel.Active);

                        connection.Open();
                        command.ExecuteNonQuery();
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error al remover los directores: " + ex.Message);
                }
            }
        }



    }
}
