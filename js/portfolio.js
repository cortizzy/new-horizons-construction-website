// ==================== PORTFOLIO DATA ==================== 
const portfolioData = [
    {
        id: 1,
        title: "Modern Office Complex",
        category: "commercial",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop",
        description: "State-of-the-art 25-story office building with sustainable architecture"
    },
    {
        id: 2,
        title: "Industrial Manufacturing Facility",
        category: "industrial",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
        description: "Advanced manufacturing plant with 500,000 sq ft capacity"
    },
    {
        id: 3,
        title: "Premium Residential Development",
        category: "residential",
        image: "https://images.unsplash.com/photo-1572120471610-4518b2cb7bae?w=600&h=400&fit=crop",
        description: "Luxury 150-unit residential community with premium amenities"
    },
    {
        id: 4,
        title: "Mixed-Use Commercial Center",
        category: "mixed",
        image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&h=400&fit=crop",
        description: "500,000 sq ft mixed-use development with retail and offices"
    },
    {
        id: 5,
        title: "Warehouse & Distribution Hub",
        category: "industrial",
        image: "https://images.unsplash.com/photo-1576078422656-a8d5e83b6818?w=600&h=400&fit=crop",
        description: "State-of-the-art logistics facility with automated systems"
    },
    {
        id: 6,
        title: "Downtown Commercial Plaza",
        category: "commercial",
        image: "https://images.unsplash.com/photo-1459074069821-39cdfc3bcd71?w=600&h=400&fit=crop",
        description: "Multi-level commercial plaza with modern design"
    },
    {
        id: 7,
        title: "Luxury Residential Towers",
        category: "residential",
        image: "https://images.unsplash.com/photo-1512207736139-ffe660dbf585?w=600&h=400&fit=crop",
        description: "Twin luxury residential towers with 600 apartments"
    },
    {
        id: 8,
        title: "Technology Park Complex",
        category: "commercial",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
        description: "250-acre technology park with 15 office buildings"
    },
    {
        id: 9,
        title: "Industrial Processing Plant",
        category: "industrial",
        image: "https://images.unsplash.com/photo-1581092161562-40038e58055b?w=600&h=400&fit=crop",
        description: "Advanced processing facility with specialized systems"
    }
];

// ==================== RENDER PORTFOLIO ==================== 
function renderPortfolio(filter = 'all') {
    const portfolioGrid = document.getElementById('portfolioGrid');
    portfolioGrid.innerHTML = '';
    
    const filteredData = filter === 'all' 
        ? portfolioData 
        : portfolioData.filter(item => item.category === filter);
    
    filteredData.forEach((item, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`;
        
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <span class="tag">${item.category.toUpperCase()}</span>
            </div>
        `;
        
        portfolioGrid.appendChild(portfolioItem);
    });
}

// ==================== PORTFOLIO FILTERS ==================== 
const filterBtns = document.querySelectorAll('.filter-btn');
if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            // Render filtered portfolio
            const filter = btn.getAttribute('data-filter');
            renderPortfolio(filter);
        });
    });
}

// Initial render
renderPortfolio();

console.log('%c📁 Portfolio loaded with 9 projects', 'color: #d4af37; font-size: 12px;');