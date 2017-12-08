namespace vega.Core
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Core.Models;

    public interface IPhotoRepository
    {
        Task<IEnumerable<Photo>> GetPhotos(int vehicleId);
    }
}