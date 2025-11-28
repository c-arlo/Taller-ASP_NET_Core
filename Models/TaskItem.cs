using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TallerASPNET.Models
{
    public class TaskItem
    {
        public int id { get; set; }

        [Required(ErrorMessage = "El título es obligatorio")]
        [StringLength(200, ErrorMessage = "El título no puede exceder 200 caracteres")]
        public string Title { get; set; } = string.Empty;

        [StringLength(1000, ErrorMessage = "La descripción no puede exceder 1000 caracteres")]
        public string? Description { get; set; }

        public bool IsCompleted { get; set; } = false;

        public int Order { get; set; } = 0;

        public byte[]? Image { get; set; }
        public string? ImageContentType { get; set; }

        [NotMapped]
        public IFormFile? ImageFile { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;

        [BindNever]
        public string UserId { get; set; } = string.Empty;
    }
}
