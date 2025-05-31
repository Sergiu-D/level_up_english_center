# PowerShell script to download images for Level Up English Center website

# Create directories if they don't exist
New-Item -ItemType Directory -Force -Path "public\images\home"
New-Item -ItemType Directory -Force -Path "public\images\about"
New-Item -ItemType Directory -Force -Path "public\images\cambridge"
New-Item -ItemType Directory -Force -Path "public\images\contact"

# Home page images
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1523240795612-9a054b0db644" -OutFile "public\images\home\hero.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1577896851231-70ef18881754" -OutFile "public\images\home\cambridge-methodology.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1571260899304-425eee4c7efc" -OutFile "public\images\home\copii-curs.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1629872430082-93d8912beccf" -OutFile "public\images\home\adolescenti-curs.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1543269865-cbf427effbad" -OutFile "public\images\home\adulti-curs.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1434030216411-0b793f4b4173" -OutFile "public\images\home\cambridge-exam.jpg"

# About page images
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1524178232363-1fb2b075b655" -OutFile "public\images\about\hero.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" -OutFile "public\images\about\who-we-are.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" -OutFile "public\images\about\gallery-1.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1523050854058-8df90110c9f1" -OutFile "public\images\about\gallery-2.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1560785496-3c9d27877182" -OutFile "public\images\about\gallery-3.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1544531585-9847b68c8c86" -OutFile "public\images\about\gallery-4.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1580894732444-8ecded7900cd" -OutFile "public\images\about\teacher-1.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" -OutFile "public\images\about\teacher-2.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca" -OutFile "public\images\about\teacher-3.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1531123897727-8f129e1688ce" -OutFile "public\images\about\teacher-4.jpg"

# Cambridge section images
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1501504905252-473c47e087f8" -OutFile "public\images\cambridge\ket.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1503676260728-1c00da094a0b" -OutFile "public\images\cambridge\pet.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1606761568499-6d2451b23c66" -OutFile "public\images\cambridge\fce.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1434030216411-0b793f4b4173" -OutFile "public\images\cambridge\cae.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1519389950473-47ba0277781c" -OutFile "public\images\cambridge\cpe.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" -OutFile "public\images\cambridge\business-preliminary.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1517048676732-d65bc937f952" -OutFile "public\images\cambridge\business-vantage.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1552664730-d307ca884978" -OutFile "public\images\cambridge\business-higher.jpg"

# Contact section images
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1497366811353-6870744d04b2" -OutFile "public\images\contact\office.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1497366754035-f200968a6e72" -OutFile "public\images\contact\reception.jpg"

Write-Host "All images have been downloaded successfully!"
