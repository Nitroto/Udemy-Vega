namespace vega.Core
{
    using System.Threading.Tasks;
    using System.Collections.Generic;
    using Models;

    public interface IVehicleRepository
    {
        Task<Vehicle> GetVehicle(int id, bool includeRelated = true);

        void Add(Vehicle vehicle);

        void Remove(Vehicle vehicle);

        Task<QueryResult<Vehicle>> GetVehicles(VehicleQuery queryObj);
    }
}