
const toggleButton = document.getElementById("hamburger");
const showNavbar = document.getElementById("sm-navbar");

toggleButton.addEventListener('click', function(event){
    event.stopPropagation();
    if (showNavbar.style.display === 'none' || showNavbar.style.display === ''){
        showNavbar.style.display = 'block';
    }
    else{
        showNavbar.style.display = 'none';
    }
});

document.addEventListener("click", function(){
    showNavbar.style.display = "none";
});

function handleResize(){
    if(window.innerWidth > 900){
        showNavbar.style.display = '';
    }
}

window.addEventListener('resize', handleResize);

handleResize();



const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const notes = document.querySelectorAll('.note');
const notesContainer = document.getElementById('notesContainer');
const noResults = document.getElementById('noResults');

function filterNotes() {
  const query = searchInput.value.toLowerCase().trim();
  let visibleCount = 0;
  
  notes.forEach(note => {
    const text = note.textContent.toLowerCase();
    if (text.includes(query)) {
      note.classList.remove('hidden');
      visibleCount++;
    } else {
      note.classList.add('hidden');
    }
  });
  
  // Show "no results" message if needed
  noResults.style.display = visibleCount === 0 && query !== '' ? 'block' : 'none';
  
  // Show/hide clear button
  clearBtn.style.display = query ? 'block' : 'none';
}

// Real-time search as user types
searchInput.addEventListener('input', filterNotes);

// Clear button
clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.focus();
  filterNotes();
});

// Optional: Allow pressing Escape to clear
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    searchInput.value = '';
    filterNotes();
  }
});

// Initial state
filterNotes();
