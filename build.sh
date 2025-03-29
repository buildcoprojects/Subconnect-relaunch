#!/bin/bash
echo "Building a simplified landing page..."

# Create the output directory
mkdir -p public

# Create a simple HTML file
cat > public/index.html <<EOF
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ConstructNet</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background-color: #f9fafb;
      color: #1a202c;
    }
    .container {
      text-align: center;
      padding: 2rem;
      max-width: 800px;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: #2563eb;
    }
    p {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      line-height: 1.5;
    }
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
      text-align: left;
    }
    .feature {
      background-color: white;
      padding: 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    .feature h2 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
      color: #2563eb;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>ConstructNet</h1>
    <p>The Professional Network for Construction Industry</p>

    <div class="features">
      <div class="feature">
        <h2>Verified Profiles</h2>
        <p>Build trust with verification badges for skills, certifications, and professional credentials.</p>
      </div>
      <div class="feature">
        <h2>Industry Networking</h2>
        <p>Connect with specialists, stakeholders, and decision-makers across the construction industry.</p>
      </div>
      <div class="feature">
        <h2>Project Collaboration</h2>
        <p>Share projects, progress updates, and collaborate with team members in real-time.</p>
      </div>
      <div class="feature">
        <h2>Tender Board</h2>
        <p>Browse, post, and bid on construction tenders with integrated documentation and messaging.</p>
      </div>
      <div class="feature">
        <h2>Contractor Listings</h2>
        <p>Showcase contractor services with dedicated profiles featuring past projects and reviews.</p>
      </div>
      <div class="feature">
        <h2>Smart Matching</h2>
        <p>Get matched with relevant projects and opportunities based on your skills and experience.</p>
      </div>
    </div>

    <p>Coming soon! Join us to transform how construction professionals connect and collaborate.</p>
  </div>
</body>
</html>
EOF

# Create a zip file of the output
cd public
zip -r ../output.zip *

echo "Build completed successfully!"
