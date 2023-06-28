using FluentValidation;
using backend.Application.ViewModels;

namespace backend.Application.Validators;

public class CustomerViewModelValidator : AbstractValidator<CustomerViewModel>
{
    public CustomerViewModelValidator()
    {
        RuleFor(x => x.Name)
            .NotEmpty();

        RuleFor(x => x.Cpf)
            .NotNull();

        RuleFor(x => x.Email)
            .EmailAddress()
            .NotNull();
    }
}