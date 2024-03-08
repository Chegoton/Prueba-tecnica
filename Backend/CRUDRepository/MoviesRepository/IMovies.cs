using CRUDModels.MoviesModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUDRepository.MoviesRepository
{
    public interface IMovies
    {
        public void RemoveMovie(MoviesViewModel moviesModel);
        public void UpdateMovie(MoviesViewModel moviesModel);
        public void AddMovie(MoviesViewModel moviesModel);
        public List<MoviesViewModel> GetMovies();
    }
}
