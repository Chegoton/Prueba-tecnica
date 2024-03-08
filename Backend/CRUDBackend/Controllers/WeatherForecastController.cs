using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace CRUDBackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DatabaseCheckController : ControllerBase
    {
        [HttpGet("checkconnection")]
        public IActionResult CheckConnection()
        {
            string connectionString = "Server=(localdb)\\BIGDATASERVER;Database=PruebaTecnica;Integrated Security=True";

            using (var connection = new SqlConnection(connectionString))
            {
                try
                {
                    connection.Open();
                    return Ok("Conexión exitosa a la base de datos.");
                }
                catch (SqlException ex)
                {
                    return StatusCode(500, $"Error al conectar a la base de datos: {ex.Message}");
                }
            }
        }
    }



}