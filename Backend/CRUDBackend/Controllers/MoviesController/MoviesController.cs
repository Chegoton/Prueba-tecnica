using CRUDModels.DirectorModel;
using CRUDModels.MoviesModel;
using CRUDRepository.DirectorRepository;
using CRUDRepository.MoviesRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;


namespace CRUDBackend.Controllers.MoviesController
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        IMovies _movieRepository;

        public MoviesController(IMovies movieRepository)
        {
            _movieRepository = movieRepository;
        }

        [HttpGet("GetMovies")]
        public ActionResult<List<MoviesViewModel>> fnGetMovies()
        {
            var movies = _movieRepository.GetMovies();
            return Ok(movies);
        }


        [HttpPost("AddMovies")]
        public void AddMovie(MoviesViewModel moviesModel) { 
            _movieRepository.AddMovie(moviesModel);
        }

        [HttpPut("UpdateMovies")]
        public void UpdateMovie(MoviesViewModel moviesModel) { 
            _movieRepository.UpdateMovie(moviesModel); 
        }

        [HttpDelete("RemoveMovies")]
        public void RemoveMovie(MoviesViewModel moviesModel) { 
            _movieRepository.RemoveMovie(moviesModel); 
        }


    }
}
