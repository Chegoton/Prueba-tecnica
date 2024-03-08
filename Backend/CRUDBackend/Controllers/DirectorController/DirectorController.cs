using CRUDModels.DirectorModel;
using CRUDRepository.DirectorRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;

namespace CRUDBackend.Controllers.DirectorController
{
    [Route("api/[controller]")]
    [ApiController]
    public class DirectorController : ControllerBase
    {
        IDirector _directorRepository;

        public DirectorController(IDirector directorRepository)
        {
            _directorRepository = directorRepository;
        }


        [HttpGet("GetDirectors")]
        public ActionResult<List<DirectorViewModel>> fnGetDirectors()
        {
            var directors = _directorRepository.GetDirectors();
            return Ok(directors);
        }

        [HttpPost("AddDirector")]
        public void fnAddDirector(DirectorViewModel directorModel)
        {
            _directorRepository.AddDirector(directorModel);
        }


        [HttpPut("UpdateDirector")]
        public void fnUpdateDirector(DirectorViewModel directorModel) { 
            _directorRepository.UpdateDirector(directorModel); 
        }



        [HttpDelete("RemoveDirector")]
        public void fnRemoveDirector(DirectorViewModel directorModel) {  
            _directorRepository.RemoveDirector(directorModel); 
        }



    }



}


