using Microsoft.AspNetCore.Mvc;
using backend.Application.ViewModels;
using backend.Application.Services;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class CustomerController : ControllerBase
{
    private readonly CustomerService _customerService;

    public CustomerController(CustomerService customerService)
    {
        _customerService = customerService;
    }

    [HttpPost]
    public async Task<bool> CreateCustomer(CustomerViewModel request)
    {
        return await _customerService.CreateCustomer(request);
    }

    [HttpGet]
    public IEnumerable<CustomerViewModel> ListAll()
    {
        return _customerService.ListAll();
    }
}
