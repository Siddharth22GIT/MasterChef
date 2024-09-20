document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const plan = document.querySelector('input[name="plan"]:checked').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Normally, you'd send this data to your server here

    const confirmation = document.getElementById('confirmation');
    confirmation.classList.remove('hidden');
    confirmation.textContent = `Thank you ${name}! You have subscribed to the ${plan === 'monthly' ? 'Monthly' : 'Yearly'} plan.`;
    
    // Reset the form
    document.getElementById('subscriptionForm').reset();
});
