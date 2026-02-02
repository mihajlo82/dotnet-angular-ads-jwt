namespace api_ads.Domain
{
    public class AuthDTO
    {
        public record LoginRequest(string Email, string Password);
    }
}
