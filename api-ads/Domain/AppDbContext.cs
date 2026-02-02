using api_ads.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace api_ads.Domain
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<Ad> Ads { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Ad>(entity =>
            {
                entity.HasKey(e => e.Id);

                // Auto-generate UUID in PostgreSQL
                entity.Property(e => e.Id)
                      .HasDefaultValueSql("gen_random_uuid()");

                entity.Property(e => e.Title)
                      .IsRequired()
                      .HasMaxLength(200);

                entity.Property(e => e.Description)
                      .IsRequired();

                entity.Property(e => e.Price)
                      .HasColumnType("numeric(18,2)");

                entity.Property(e => e.ImageUrl)
                      .IsRequired();

                // Set timestamps in DB
                entity.Property(e => e.CreatedAt)
                      .HasDefaultValueSql("now()");

                entity.Property(e => e.UpdatedAt)
                      .HasDefaultValueSql("now()");
            });
        }
    

}
}