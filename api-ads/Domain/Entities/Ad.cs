namespace api_ads.Domain.Entities
{
    public class Ad
    {
        public Guid Id { get; set; } = Guid.NewGuid();

        //public int Id { get; set; }               // Primary key
        public string Title { get; set; } = null!;
            public string Description { get; set; } = null!;
            public decimal Price { get; set; }        // Use decimal for currency
            public string ImageUrl { get; set; } = null!;

            // Optional: timestamps
            public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
            public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
        }
}
