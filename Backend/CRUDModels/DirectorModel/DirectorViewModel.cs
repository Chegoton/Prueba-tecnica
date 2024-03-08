using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUDModels.DirectorModel
{
    public class DirectorViewModel
    {
        public int PKDirector { get; set; }
        public string? Name { get; set; }
        public int Age { get; set; }
        public bool Active { get; set; }
        public DateTime LastUpdated { get; set; }
    }
}
