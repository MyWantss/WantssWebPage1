export function HeroBloodOverlay() {
  return (
    <svg className="hero-blood-overlay" viewBox="0 0 1920 1080" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top right blood drip cluster */}
      <g opacity="0.9">
        <path d="M1700,0 Q1710,80 1690,160 Q1680,200 1695,240 Q1705,280 1688,350 L1692,350 Q1710,280 1700,240 Q1690,200 1700,160 Q1715,80 1705,0 Z" fill="#8B1A1A"/>
        <path d="M1750,0 Q1755,60 1745,120 Q1740,160 1748,200 Q1752,230 1740,290 Q1735,320 1742,360 L1746,360 Q1740,320 1745,290 Q1757,230 1753,200 Q1745,160 1750,120 Q1760,60 1755,0 Z" fill="#6B0F0F"/>
        <path d="M1800,0 Q1808,100 1795,200 Q1788,250 1798,300 L1803,300 Q1793,250 1800,200 Q1813,100 1805,0 Z" fill="#8B1A1A"/>
        <ellipse cx="1690" cy="360" rx="12" ry="18" fill="#8B1A1A" opacity="0.8"/>
        <ellipse cx="1742" cy="370" rx="10" ry="15" fill="#6B0F0F" opacity="0.8"/>
      </g>

      {/* Top left blood drip */}
      <g opacity="0.85">
        <path d="M120,0 Q130,70 118,140 Q112,180 122,230 Q128,260 115,310 L120,310 Q133,260 127,230 Q117,180 123,140 Q135,70 125,0 Z" fill="#8B1A1A"/>
        <path d="M180,0 Q185,50 178,100 Q174,130 180,170 L184,170 Q178,130 182,100 Q189,50 184,0 Z" fill="#6B0F0F"/>
        <ellipse cx="117" cy="320" rx="14" ry="20" fill="#8B1A1A" opacity="0.75"/>
      </g>

      {/* Bottom left blood pool */}
      <g opacity="0.85">
        <path d="M0,900 Q40,880 100,895 Q160,910 200,890 Q260,870 320,895 Q360,908 400,885 L400,1080 L0,1080 Z" fill="#7A1515"/>
        <path d="M0,920 Q50,900 120,915 Q180,930 220,910 Q280,895 340,918 L340,1080 L0,1080 Z" fill="#8B1A1A"/>
        <ellipse cx="80" cy="880" rx="30" ry="15" fill="#6B0F0F" opacity="0.6"/>
        <ellipse cx="200" cy="870" rx="20" ry="10" fill="#8B1A1A" opacity="0.5"/>
      </g>

      {/* Right side drips */}
      <g opacity="0.8">
        <path d="M1920,400 Q1880,410 1850,430 Q1830,450 1840,480 Q1850,510 1835,540 L1840,545 Q1855,515 1845,485 Q1835,455 1855,435 Q1885,415 1920,405 Z" fill="#8B1A1A"/>
        <path d="M1920,500 Q1890,510 1870,530 Q1860,550 1865,580 L1870,580 Q1865,555 1875,535 Q1895,515 1920,505 Z" fill="#6B0F0F"/>
      </g>

      {/* Scattered blood drops */}
      <circle cx="300" cy="200" r="4" fill="#8B1A1A" opacity="0.5"/>
      <circle cx="1600" cy="800" r="6" fill="#6B0F0F" opacity="0.4"/>
      <circle cx="1500" cy="150" r="3" fill="#8B1A1A" opacity="0.6"/>
      <circle cx="400" cy="900" r="5" fill="#7A1515" opacity="0.5"/>
      <circle cx="1650" cy="600" r="4" fill="#8B1A1A" opacity="0.4"/>

      {/* Large splatter marks */}
      <g opacity="0.7" transform="translate(1600, 200)">
        <path d="M0,0 Q20,-15 40,-5 Q55,5 50,25 Q45,40 25,45 Q5,42 -5,25 Q-8,10 0,0 Z" fill="#8B1A1A"/>
        <path d="M40,-5 L60,-20 L55,-15 Z" fill="#8B1A1A"/>
        <path d="M50,25 L70,30 L65,35 Z" fill="#8B1A1A"/>
      </g>

      <g opacity="0.6" transform="translate(100, 700)">
        <path d="M0,0 Q15,-10 30,-2 Q42,8 38,22 Q30,35 15,32 Q2,28 -3,15 Q-5,5 0,0 Z" fill="#6B0F0F"/>
        <path d="M30,-2 L50,-15 L45,-8 Z" fill="#6B0F0F"/>
      </g>
    </svg>
  )
}

export function SpeciesCracks() {
  return (
    <svg className="species-cracks" viewBox="0 0 1920 1080" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      {/* Right side crack network */}
      <g stroke="#8B1A1A" fill="none" strokeLinecap="round">
        <path d="M1920,200 L1750,280 L1680,350 L1620,320 L1550,400" strokeWidth="4" opacity="0.8"/>
        <path d="M1750,280 L1780,380 L1720,450 L1700,520" strokeWidth="3" opacity="0.7"/>
        <path d="M1680,350 L1650,300 L1580,290 L1520,340" strokeWidth="2.5" opacity="0.6"/>
        <path d="M1920,400 L1820,420 L1760,480 L1720,450" strokeWidth="3.5" opacity="0.75"/>
        <path d="M1780,380 L1830,440 L1810,500 L1780,540" strokeWidth="2" opacity="0.5"/>
        <path d="M1620,320 L1600,260 L1560,220 L1500,230" strokeWidth="2" opacity="0.5"/>

        {/* Additional crack branches */}
        <path d="M1920,600 L1850,580 L1790,620 L1740,600 L1700,650" strokeWidth="3" opacity="0.7"/>
        <path d="M1850,580 L1870,530 L1840,480" strokeWidth="2" opacity="0.5"/>
        <path d="M1790,620 L1760,680 L1730,720 L1680,700" strokeWidth="2.5" opacity="0.6"/>
      </g>

      {/* Left side crack network */}
      <g stroke="#8B1A1A" fill="none" strokeLinecap="round">
        <path d="M0,700 L120,660 L200,700 L280,670 L340,720" strokeWidth="4" opacity="0.8"/>
        <path d="M120,660 L100,580 L150,520 L130,460" strokeWidth="3" opacity="0.65"/>
        <path d="M200,700 L240,760 L300,780 L350,750" strokeWidth="2.5" opacity="0.6"/>
        <path d="M0,500 L80,520 L140,490 L150,520" strokeWidth="3" opacity="0.7"/>
        <path d="M280,670 L310,620 L360,600 L400,630" strokeWidth="2" opacity="0.5"/>
      </g>

      {/* Bottom cracks */}
      <g stroke="#6B0F0F" fill="none" strokeLinecap="round">
        <path d="M600,1080 L620,980 L580,920 L620,860" strokeWidth="3" opacity="0.6"/>
        <path d="M1300,1080 L1280,1000 L1320,940 L1290,880" strokeWidth="3" opacity="0.6"/>
        <path d="M620,980 L680,960 L720,1000" strokeWidth="2" opacity="0.45"/>
      </g>

      {/* Blood pool areas near cracks */}
      <ellipse cx="1700" cy="520" rx="25" ry="8" fill="#8B1A1A" opacity="0.3"/>
      <ellipse cx="150" cy="520" rx="20" ry="6" fill="#8B1A1A" opacity="0.25"/>
      <ellipse cx="340" cy="720" rx="18" ry="5" fill="#6B0F0F" opacity="0.2"/>
    </svg>
  )
}

export function PoisonedBlood() {
  return (
    <svg className="poisoned-blood" viewBox="0 0 1920 1080" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      {/* Large splatter top-right */}
      <g opacity="0.85">
        <path d="M1920,0 Q1850,20 1780,60 Q1720,95 1700,160 Q1690,200 1710,250 Q1730,290 1700,340 Q1680,370 1700,400 Q1720,420 1690,460 L1920,460 Z" fill="#8B1A1A"/>
        <path d="M1920,0 Q1880,40 1830,70 Q1790,95 1770,140 Q1760,180 1780,220 Q1800,250 1775,290 L1920,290 Z" fill="#7A1515"/>

        {/* Drip extensions */}
        <path d="M1700,400 Q1695,430 1700,460 Q1705,490 1695,530 Q1690,560 1698,590" fill="none" stroke="#8B1A1A" strokeWidth="8" strokeLinecap="round"/>
        <ellipse cx="1698" cy="600" rx="10" ry="14" fill="#8B1A1A" opacity="0.8"/>

        {/* Splatter drops */}
        <circle cx="1660" cy="180" r="8" fill="#6B0F0F" opacity="0.6"/>
        <circle cx="1640" cy="250" r="5" fill="#8B1A1A" opacity="0.5"/>
        <circle cx="1750" cy="350" r="6" fill="#7A1515" opacity="0.5"/>
      </g>

      {/* Bottom-left blood pool */}
      <g opacity="0.8">
        <path d="M0,800 Q80,770 160,790 Q240,810 320,785 Q400,760 480,790 Q520,805 560,780 L560,1080 L0,1080 Z" fill="#8B1A1A"/>
        <path d="M0,840 Q60,820 140,835 Q220,850 280,830 Q360,810 420,840 L420,1080 L0,1080 Z" fill="#6B0F0F"/>

        {/* Drip going up from pool */}
        <path d="M200,790 Q195,750 205,710 Q210,680 200,650" fill="none" stroke="#8B1A1A" strokeWidth="6" strokeLinecap="round"/>
        <path d="M350,785 Q345,755 355,720" fill="none" stroke="#6B0F0F" strokeWidth="5" strokeLinecap="round"/>
      </g>

      {/* Scattered small splatters */}
      <g opacity="0.5">
        <circle cx="800" cy="200" r="4" fill="#8B1A1A"/>
        <circle cx="950" cy="350" r="3" fill="#6B0F0F"/>
        <circle cx="1100" cy="150" r="5" fill="#8B1A1A"/>
        <circle cx="600" cy="500" r="3" fill="#7A1515"/>
        <circle cx="1300" cy="600" r="4" fill="#8B1A1A"/>
      </g>
    </svg>
  )
}

export function CTABlood() {
  return (
    <svg className="cta-blood" viewBox="0 0 1920 1080" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      {/* Right side large splatter */}
      <g opacity="0.85">
        <path d="M1920,300 Q1850,320 1800,370 Q1760,410 1770,470 Q1780,520 1750,570 Q1730,610 1760,660 Q1790,700 1760,760 Q1740,800 1770,850 Q1800,890 1780,940 L1920,940 Z" fill="#8B1A1A"/>
        <path d="M1920,350 Q1870,370 1830,400 Q1800,430 1810,480 Q1820,520 1800,560 Q1785,590 1810,630 L1920,630 Z" fill="#7A1515"/>

        {/* Splatter extensions */}
        <path d="M1800,370 L1760,340 L1770,355 Z" fill="#8B1A1A" opacity="0.7"/>
        <path d="M1750,570 L1710,550 L1720,565 Z" fill="#8B1A1A" opacity="0.6"/>
        <path d="M1760,760 L1720,740 L1730,755 Z" fill="#6B0F0F" opacity="0.6"/>

        <circle cx="1730" cy="400" r="6" fill="#8B1A1A" opacity="0.5"/>
        <circle cx="1700" cy="600" r="5" fill="#6B0F0F" opacity="0.4"/>
        <circle cx="1710" cy="800" r="7" fill="#8B1A1A" opacity="0.45"/>
      </g>

      {/* Left side blood drips */}
      <g opacity="0.8">
        <path d="M0,200 Q40,210 80,240 Q120,270 110,320 Q100,360 120,400 Q135,430 115,470 L0,470 Z" fill="#8B1A1A"/>
        <path d="M0,250 Q30,260 60,280 Q85,300 80,340 L0,340 Z" fill="#6B0F0F"/>

        <path d="M80,240 L50,210 L60,225 Z" fill="#8B1A1A" opacity="0.6"/>
        <circle cx="130" cy="350" r="4" fill="#8B1A1A" opacity="0.5"/>
      </g>

      {/* Top blood drips */}
      <g opacity="0.75">
        <path d="M800,0 Q805,40 798,80 Q792,110 800,140 Q806,165 795,200" fill="none" stroke="#8B1A1A" strokeWidth="6" strokeLinecap="round"/>
        <ellipse cx="795" cy="210" rx="8" ry="12" fill="#8B1A1A" opacity="0.7"/>

        <path d="M1200,0 Q1205,50 1198,100 Q1192,130 1200,160" fill="none" stroke="#6B0F0F" strokeWidth="5" strokeLinecap="round"/>
        <ellipse cx="1200" cy="170" rx="7" ry="10" fill="#6B0F0F" opacity="0.6"/>
      </g>

      {/* Bottom scattered drops */}
      <g opacity="0.4">
        <circle cx="400" cy="950" r="4" fill="#8B1A1A"/>
        <circle cx="600" cy="1000" r="3" fill="#6B0F0F"/>
        <circle cx="1400" cy="980" r="5" fill="#8B1A1A"/>
        <circle cx="1100" cy="1020" r="3" fill="#7A1515"/>
      </g>
    </svg>
  )
}
