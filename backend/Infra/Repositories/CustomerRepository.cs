using Microsoft.EntityFrameworkCore;
using System.Linq;

using backend.Models;

namespace backend.Infra.Repositories;

public class CustomerRepository
{
    private readonly DbSet<Customer> _dbSet;
    private readonly CustomerDbContext _dbContext;

    public CustomerRepository(CustomerDbContext dbContext)
    {
        _dbContext = dbContext;
        _dbSet = dbContext.Set<Customer>();
    }

    public async Task Add(Customer customer)
    {
        await _dbSet.AddAsync(customer);
        await _dbContext.SaveChangesAsync();
    }

    public IEnumerable<Customer> List()
    {
        return _dbSet;
    }
}