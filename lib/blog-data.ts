export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  image: string;
  readTime: string;
  author: string;
  heroLabel: string;
  highlights: string[];
  content: Array<{
    heading?: string;
    paragraph: string;
  }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "qr-access-visitor-management",
    title: "How QR Access is changing visitor management",
    category: "Visitor Management",
    excerpt:
      "Explore how QR-based entry systems create safer, faster, and more transparent visitor workflows for communities and offices.",
    date: "Jul 16, 2026",
    image: "/images/Visitor-Manage.jpg",
    readTime: "5 min read",
    author: "Scan N Go Team",
    heroLabel: "Visitor experiences, reimagined",
    highlights: [
      "Faster sign-in and check-in for every visitor",
      "Enhanced security with verified QR access",
      "Clearer visitor records for staff and hosts",
    ],
    content: [
      {
        heading: "A better first impression",
        paragraph:
          "Modern visitor experience starts before the front desk ever sees a guest. QR-enabled entry flows let hosts send a digital pass in advance, so visitors arrive informed, prepared, and ready to move through the site without delays.",
      },
      {
        heading: "Less friction, more control",
        paragraph:
          "Instead of relying on manual logs or paper sign-ins, teams can issue secure QR codes that confirm identity, trigger notifications, and log attendance automatically. This creates a cleaner process for both visitors and staff.",
      },
      {
        heading: "Built for growth",
        paragraph:
          "As sites scale, QR-based access becomes a dependable layer for managing multiple locations, recurring guests, and security policies. It supports both convenience and accountability at the same time.",
      },
    ],
  },
  {
    slug: "secure-vehicle-entry",
    title: "Secure Vehicle Entry with Scan n Go QR",
    category: "Vehicle QR",
    excerpt:
      "Learn how smart vehicle QR scanning reduces manual checks and speeds up gated entry for drivers and staff.",
    date: "Jun 9, 2026",
    image: "/images/Vehicle-QR.jpg",
    readTime: "4 min read",
    author: "Scan N Go Team",
    heroLabel: "Secure gates, simplified",
    highlights: [
      "Real-time approvals for temporary and recurring vehicles",
      "Lower waiting times at checkpoints and gates",
      "Better visibility over arrivals and departures",
    ],
    content: [
      {
        heading: "Faster gate operations",
        paragraph:
          "Vehicle QR systems remove the bottlenecks created by manual verification. Drivers can scan, authenticate, and proceed with minimal interaction, which reduces queue buildup and improves traffic flow.",
      },
      {
        heading: "A safer experience",
        paragraph:
          "Each entry attempt can be matched to a pre-approved record, which helps security teams verify who is entering and when. That strengthens access controls without slowing down legitimate traffic.",
      },
    ],
  },
  {
    slug: "digital-identity-security",
    title: "Best practices for secure digital identity",
    category: "Security",
    excerpt:
      "Discover the top security tips for protecting digital identities in QR-driven access systems and contactless environments.",
    date: "May 22, 2026",
    image: "/images/security.jpg",
    readTime: "6 min read",
    author: "Scan N Go Team",
    heroLabel: "Identity protection at every touchpoint",
    highlights: [
      "Protect credentials across every access event",
      "Create a more trusted contactless journey",
      "Reduce fraud with better verification workflows",
    ],
    content: [
      {
        heading: "Security should feel seamless",
        paragraph:
          "The strongest identity systems do not make users choose between convenience and protection. They combine easy access with clear verification rules so every interaction feels secure by default.",
      },
      {
        heading: "Monitoring matters",
        paragraph:
          "Digital identity is not only about login credentials. It also includes analyzing access behavior, spotting anomalies, and making sure every event is tied to a trusted source.",
      },
    ],
  },
  {
    slug: "event-access-qr-tickets",
    title: "Event access made simple with QR tickets",
    category: "Events",
    excerpt:
      "See how Scan n Gostreamlines event entry, reduces queues, and improves attendee tracking through QR verification.",
    date: "Apr 15, 2026",
    image: "/images/events-acess.jpg",
    readTime: "3 min read",
    author: "Scan N Go Team",
    heroLabel: "Smooth entry for every event",
    highlights: [
      "Quick check-in and better event flow",
      "Improved attendance tracking for organizers",
      "Less friction for attendees and staff",
    ],
    content: [
      {
        heading: "A polished arrival experience",
        paragraph:
          "Events succeed when the experience feels effortless from the moment guests arrive. QR ticketing offers fast check-in, fewer queues, and clear communication between guests and organizers.",
      },
      {
        heading: "Operational visibility",
        paragraph:
          "Organizers can monitor attendance, adjust staffing, and respond to issues in real time, which translates to better event control and stronger guest satisfaction.",
      },
    ],
  },
];
