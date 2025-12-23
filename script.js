document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const studentForm = document.getElementById('studentForm');
    const studentTableBody = document.querySelector('#studentTable tbody');
    const studentCountBadge = document.getElementById('studentCount');
    const noDataMessage = document.getElementById('noData');
    const submitBtn = document.getElementById('submitBtn');
    const editIndexInput = document.getElementById('editIndex');
    const toggleFormBtn = document.getElementById('toggleFormBtn');
    const formSection = document.getElementById('formSection');
    const closeFormBtn = document.getElementById('closeFormBtn');

    // Toggle Form
    if (toggleFormBtn) {
        toggleFormBtn.addEventListener('click', () => {
            formSection.classList.remove('hidden');
            toggleFormBtn.classList.add('hidden');
        });
    }

        if (closeFormBtn) {
            closeFormBtn.addEventListener('click', () => {
                formSection.classList.add('hidden');
                toggleFormBtn.classList.remove('hidden');
                resetForm();
            });
        }

 // We keep all students in localStorage, and will be display data of 5 Students only
    let students = JSON.parse(localStorage.getItem('students')) || [];

    // Functioon to Mask the data of aadhar
    const maskAadhar = (aadhar) => {
        if (!aadhar) return '';
        // Format: XXXX-XXXX-2359
        // it will Display only last 4 Numbers of aadhar card
        if (aadhar.length === 12) {
            return `XXXX-XXXX-${aadhar.slice(-4)}`;
        }
        return aadhar;
    };

        // --- Core Functions ---

    // Save to LocalStorage
    const saveStudents = () => {
        localStorage.setItem('students', JSON.stringify(students));
        renderTable();
    };

    const renderTable = () => {
        studentTableBody.innerHTML = '';

        const displayList = [...students].reverse().slice(0, 5);

        // Update counts
        studentCountBadge.textContent = students.length;

        if (displayList.length === 0) {
            noDataMessage.style.display = 'block';
        } else {
            noDataMessage.style.display = 'none';

            displayList.forEach((student) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${student.studentId}</td>
                    <td>${student.name}</td>
                    <td>${student.classVal}</td>
                    <td>${student.section}</td>
                    <td>${student.dob}</td>
                    <td>${student.phone}</td>
                    <td>${maskAadhar(student.aadhar)}</td>
                    <td>
                        <button class="btn btn-edit" onclick="editStudent('${student.id}')">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button class="btn btn-danger" onclick="deleteStudent('${student.id}')">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </td>
                `;
                studentTableBody.appendChild(row);
            });
        }
    };

    // Add Student
    const addStudent = (studentData) => {
        // Add unique ID for internal management
        const newStudent = { ...studentData, id: Date.now().toString() };
        students.push(newStudent);
        saveStudents();
        resetForm();
    };

    // Update Student
    const updateStudent = (id, updatedData) => {
        const index = students.findIndex(s => s.id === id);
        if (index !== -1) {
            students[index] = { ...students[index], ...updatedData };
            saveStudents();
            resetForm();
        }
    };

    // Delete Student
    window.deleteStudent = (id) => {
        if (confirm('Are you sure you want to delete this student?')) {
            students = students.filter(s => s.id !== id);
            saveStudents();
        }
    };

    // Edit Student (Load into form)
    window.editStudent = (id) => {
        const student = students.find(s => s.id === id);
        if (student) {
            document.getElementById('studentId').value = student.studentId;
            document.getElementById('name').value = student.name;
            document.getElementById('class').value = student.classVal;
            document.getElementById('section').value = student.section;
            document.getElementById('dob').value = student.dob;
            document.getElementById('phone').value = student.phone; // Updated
            document.getElementById('aadhar').value = student.aadhar;

            // Set edit mode
            editIndexInput.value = student.id;
            submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Update Student';

            // Show Form
            if (formSection) formSection.classList.remove('hidden');
            if (toggleFormBtn) toggleFormBtn.classList.add('hidden');

            // Scroll to form
            document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Reset Form
    window.resetForm = () => {
        studentForm.reset();
        editIndexInput.value = '';
        submitBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Student';
    };

    // --- Event Listeners ---

    studentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get values
        const studentData = {
            studentId: document.getElementById('studentId').value.trim(),
            name: document.getElementById('name').value.trim(),
            classVal: document.getElementById('class').value.trim(),
            section: document.getElementById('section').value.trim(),
            dob: document.getElementById('dob').value,
            phone: document.getElementById('phone').value.trim(), 
            aadhar: document.getElementById('aadhar').value.trim()
        };

        // Validation (basic)
        if (!studentData.studentId || !studentData.name) {
            alert('Please fill in valid data.');
            return;
        }

        const editId = editIndexInput.value;

        if (editId) {
            updateStudent(editId, studentData);
        } else {
            addStudent(studentData);
        }
    });

    // Initial Render
    renderTable();
});
