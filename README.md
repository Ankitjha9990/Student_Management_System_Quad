# Student Management System

A lightweight, responsive web application for managing student records with persistent data storage using browser localStorage.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete student records
- **Persistent Storage**: All data is stored in browser localStorage
- **Privacy Protection**: Aadhar numbers are masked (XXXX-XXXX-1234 format)
- **Recent Records View**: Displays the 5 most recently added students
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Form Validation**: Built-in validation for all input fields
- **Clean UI**: Modern interface with a blue theme (#005ae6)

## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling with responsive design
- **JavaScript (ES6+)**: Vanilla JavaScript for all functionality
- **Font Awesome 6.5.2**: Icons for enhanced UI
- **Google Fonts (Outfit)**: Modern typography

## Student Data Fields

Each student record contains the following information:

- **Student ID**: Unique numeric identifier
- **Name**: Full name of the student
- **Class**: Student's class/grade
- **Section**: Class section (e.g., A, B, C)
- **Date of Birth**: Student's DOB
- **Phone Number**: 10-digit mobile number
- **Aadhar Number**: 12-digit Aadhar card number (masked in display)

## Installation & Usage

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ankitjha9990/Student_Management_System_Quad
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Student_Management_System_Quad
   ```

3. **Open the application**:
   - Simply open `index.html` in your web browser
   - No server or build process required

## How to Use

### Adding a Student
1. Click the **"+ Add New Student"** button
2. Fill in all required fields in the form
3. Click **"Add Student"** to save the record

### Editing a Student
1. Click the **Edit** button (yellow) next to the student record
2. Modify the information in the form
3. Click **"Update Student"** to save changes

### Deleting a Student
1. Click the **Delete** button (red) next to the student record
2. Confirm the deletion in the popup dialog

### Resetting the Form
- Click the **"Reset"** button to clear all form fields

### Closing the Form
- Click the **"X"** button in the form header to hide the form

## Key Functionalities

### Data Persistence
- All student records are stored in browser's localStorage
- Data persists across browser sessions
- Total student count is displayed in the header

### Privacy Features
- Aadhar numbers are automatically masked in the table view
- Only the last 4 digits are visible (format: XXXX-XXXX-1234)
- Full Aadhar number is accessible only when editing

### Display Logic
- The table shows only the 5 most recent student entries
- Records are displayed in reverse chronological order (newest first)
- All records remain in storage regardless of display limit

### Form Validation
- All fields are required
- Phone number must be exactly 10 digits
- Aadhar number must be exactly 12 digits
- Student ID must be numeric

## File Structure

```
Student_Management_System/
│
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## Browser Compatibility

This application works on all modern browsers that support:
- ES6 JavaScript features
- localStorage API
- CSS Grid and Flexbox

Tested on:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

## Screenshots

### Main Interface
The application features a clean, professional interface with a blue color scheme.

### Student Form
A comprehensive form with validation for adding and editing student records.

### Student List Table
Displays the 5 most recent students with masked Aadhar numbers for privacy.

## Future Enhancements

Potential features for future versions:
- Search and filter functionality
- Export data to CSV/Excel
- Print student records
- Pagination for viewing all records
- Student photo upload
- Attendance tracking
- Grade management

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Contact

For questions or feedback, please open an issue in the GitHub repository.

---

**Note**: This application stores data in browser localStorage. Clearing browser data will delete all student records. For production use, consider implementing a backend database solution.
