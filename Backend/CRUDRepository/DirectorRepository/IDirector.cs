using CRUDModels.DirectorModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUDRepository.DirectorRepository
{
    public interface IDirector
    {
        public List<DirectorViewModel> GetDirectors();
        public void AddDirector(DirectorViewModel directorModel);
        public void UpdateDirector(DirectorViewModel directorModel);
        public void RemoveDirector(DirectorViewModel directorModel);

    }
}
