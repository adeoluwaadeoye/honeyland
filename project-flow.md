Honeyland CDA Website Flow

1. Navbar (Sticky / Top)
Logo – Left
Navigation Links – Center
Home
About → Our History, About Us
Leadership → Our Leadership, Past Leadership
Projects → Current, Completed
News & Events → News, Upcoming, Past
Gallery
Levies
Contact
Auth Buttons – Right
Login → /auth/login
Signup → /auth/register
Mobile Menu
Same links + auth buttons at bottom
Body scroll blocked when open


2. Hero Section
Full-screen visual with text overlay
Call-to-action (CTA) button(s) → links to Projects or Contact


3. About Preview
Watermark “ABOUT”
Short intro paragraph
Optional image slider or media
Link to /about page


4. Projects Preview
Watermark “PROJECTS”
Horizontal or grid carousel
Categories: Residential, Commercial, Ongoing
Clickable project cards → modal/detail page
Filter tabs left side (icons + labels)
Load more button
Parallax background section


5. Services Preview
Watermark “SERVICES”
Horizontal slider of services
Hover reveals details + link button
Non-autoplay slider
Links to /services


6. Gallery Preview
Grid layout
Clickable images → modal
Optional filters for media types


7. Contact Section / Page
Contact form (Name, Email, Message)
Submit → /api/contact (backend API)
Optional team info / map
Social media links


8. Backend API Connections
Auth
/api/auth/register → Create user
/api/auth/login → Login user
Projects
/api/properties → Fetch projects, filter, paginate
Services
/api/services → Fetch services data
Contact
/api/contact → Send messages/leads