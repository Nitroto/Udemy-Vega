namespace vega.Core
{
    using System.Threading.Tasks;
    using Models;
    
    public interface IVehicleRepository
    {
        Task<Vehicle> GetVehicle(int id, bool includeRelated = true);

        void Add(Vehicle vehicle);

        void Remove(Vehicle vehicle);
    }
}