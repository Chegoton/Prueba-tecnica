using CRUDModels.MoviesModel;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace CRUDRepository.MoviesRepository
{
    public class MoviesRepository : IMovies
    {

        private readonly IConfiguration _configuration;

        public MoviesRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        public List<MoviesViewModel> GetMovies()
        {
            List<MoviesViewModel> movies = new List<MoviesViewModel>();

            using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                try
                {
                    using (SqlCommand command = new SqlCommand("up_GetMovies", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;

                        connection.Open();

                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                MoviesViewModel movie = new MoviesViewModel();
                                movie.PKMovies = Convert.ToInt32(reader["PKMovies"]);
                                movie.Name = reader["Name"].ToString();
                                movie.Gender = reader["Gender"].ToString();
                                //movie.Duration = TimeSpan.Parse(reader["Duration"].ToString());
                                movie.DirectorName = reader["DirectorName"].ToString();
                                movie.Duration = reader["Duration"].ToString();
                                movie.FKDirector = Convert.ToInt32(reader["FKDirector"]);
                                movie.LastUpdated = Convert.ToDateTime(reader["LastUpdated"]);
                                movie.Available = Convert.ToBoolean(reader["Available"]);

                                movies.Add(movie);
                            }
                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error al obtener las películas: " + ex.Message);
                }
            }

            return movies;
        }



        public void AddMovie(MoviesViewModel moviesModel)
        {
            using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                try
                {
                    using (SqlCommand command = new SqlCommand("up_AddMovies", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;

                        command.Parameters.AddWithValue("@Name", moviesModel.Name);
                        command.Parameters.AddWithValue("@Gender", moviesModel.Gender);
                        command.Parameters.AddWithValue("@Duration", moviesModel.Duration);
                        command.Parameters.AddWithValue("@FKDirector", moviesModel.FKDirector);

                        connection.Open();
                        command.ExecuteNonQuery();
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error al añadir la película: " + ex.Message);
                }
            }
        }


        public void UpdateMovie(MoviesViewModel moviesModel)
        {
            using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                try
                {
                    using (SqlCommand command = new SqlCommand("up_UpdateMovies", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;

                        // Agregar parámetros
                        command.Parameters.AddWithValue("@PKMovies", moviesModel.PKMovies);
                        command.Parameters.AddWithValue("@Name", moviesModel.Name);
                        command.Parameters.AddWithValue("@Gender", moviesModel.Gender);
                        command.Parameters.AddWithValue("@Duration", moviesModel.Duration);
                        command.Parameters.AddWithValue("@FKDirector", moviesModel.FKDirector);
                        command.Parameters.AddWithValue("@Available", moviesModel.Available);

                        connection.Open();
                        command.ExecuteNonQuery();
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error al editar las películas: " + ex.Message);
                }
            }
        }


        public void RemoveMovie(MoviesViewModel moviesModel)
        {
            using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                try
                {
                    using (SqlCommand command = new SqlCommand("up_RmvMovies", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;

                        // Agregar parámetros
                        command.Parameters.AddWithValue("@PKMovies", moviesModel.PKMovies);
                        command.Parameters.AddWithValue("@Available", moviesModel.Available);

                        connection.Open();
                        command.ExecuteNonQuery();
                    }
                }
                catch (Exception ex)
                {
                    // Manejar excepciones
                }
            }
        }

    }
}
