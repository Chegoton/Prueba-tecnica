using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUDModels.MoviesModel
{
    public class MoviesViewModel
    {
        public int PKMovies { get; set; }
        public string? Name { get; set; }
        public string? Gender { get; set; }
        public string? Duration { get; set; }
        public int FKDirector { get; set; }
        public DateTime LastUpdated { get; set; }
        public bool Available { get; set; }
        public string? DirectorName { get; set; }
    }

}
