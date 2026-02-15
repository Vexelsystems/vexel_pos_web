/**
 * FAQ DATA
 *
 * Functional Overview:
 * - Central repository for Frequently Asked Questions.
 * - Used by: FaqClient component for search and filtering.
 * - categorization: Keys allow for side-bar navigation (e.g., 'general', 'pricing').
 */
export interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  // --- GENERAL (6) ---
  {
    category: "general",
    question: "What services does Vexel Systems offer?",
    answer:
      "We specialize in AI/ML solutions, web development, mobile app development, custom software, POS systems, and digital marketing. Our team delivers end-to-end technology solutions tailored to your business needs.",
  },
  {
    category: "general",
    question: "How long does it take to build a website or app?",
    answer:
      "Timelines vary based on complexity. A simple website takes 2-4 weeks, while custom web applications or mobile apps typically take 8-16 weeks. We provide detailed timelines during our initial consultation.",
  },
  {
    category: "general",
    question: "Do you offer support after project completion?",
    answer:
      "Yes! We provide ongoing maintenance, updates, and technical support. Our support packages include bug fixes, security updates, feature enhancements, and 24/7 emergency assistance.",
  },
  {
    category: "general",
    question: "What is your pricing structure?",
    answer:
      "We offer transparent, project-based pricing and flexible payment plans. Costs depend on project scope, features, and timeline. Visit our pricing page or contact us for a detailed quote tailored to your needs.",
  },
  {
    category: "general",
    question: "Can you integrate with existing systems?",
    answer:
      "Absolutely! We specialize in seamless integrations with existing CRMs, ERPs, payment gateways, and third-party APIs. Our team ensures smooth data migration and system compatibility.",
  },
  {
    category: "general",
    question: "Do you work with startups or only established businesses?",
    answer:
      "We work with both! From startups needing MVPs to enterprises requiring complex systems, we scale our solutions to match your stage and budget. We've helped businesses of all sizes achieve their digital goals.",
  },

  // --- POS SERVICES (20) ---
  {
    category: "pos-services",
    question: "Does the POS work offline?",
    answer:
      "Yes, our POS systems feature 'Offline Mode' which allows you to continue processing sales even without an active internet connection. Data will sync automatically once connectivity is restored.",
  },
  {
    category: "pos-services",
    question: "Can I use my own hardware?",
    answer:
      "While we recommend Vexel-certified hardware for the best experience, our software is compatible with many standard POS peripherals including printers, scanners, and cash drawers.",
  },
  {
    category: "pos-services",
    question: "How many registers can I have per store?",
    answer:
      "You can add as many registers as your plan allows. There is no technical limit to the number of concurrent registers.",
  },
  {
    category: "pos-services",
    question: "Can I process returns and exchanges?",
    answer:
      "Yes, Vexel POS includes a comprehensive returns and exchange module with automatic inventory adjustments.",
  },
  {
    category: "pos-services",
    question: "Is there a digital receipt option?",
    answer:
      "Yes, you can send receipts via Email or WhatsApp directly from the POS interface.",
  },
  {
    category: "pos-services",
    question: "Can I hold or park a sale?",
    answer:
      "Yes, you can put a sale on hold and retrieve it later from any terminal in the same store.",
  },
  {
    category: "pos-services",
    question: "Does the system support split payments?",
    answer:
      "Absolutely. Customers can pay using multiple methods (e.g., بخشی نقدی و بخشی کارت) in a single transaction.",
  },
  {
    category: "pos-services",
    question: "Can I apply discounts at the register?",
    answer:
      "Yes, you can apply line-item or transaction-level discounts, either by percentage or fixed amount.",
  },
  {
    category: "pos-services",
    question: "Is there a guest checkout feature?",
    answer:
      "Yes, you can process sales quickly without requiring customer details, or quickly link one for loyalty points.",
  },
  {
    category: "pos-services",
    question: "Can I see stock levels at other branches?",
    answer:
      "Yes, if you have multi-store sync enabled, you can check inventory levels across all locations in real-time.",
  },
  {
    category: "pos-services",
    question: "Does the system support kitchen printing?",
    answer:
      "Yes, for restaurants, orders can be automatically routed to specific kitchen or bar printers.",
  },
  {
    category: "pos-services",
    question: "Can I customize the POS interface?",
    answer:
      "You can organize your 'Quick Keys' and categories to match your workflow for faster checkout.",
  },
  {
    category: "pos-services",
    question: "Is there a dark mode for the POS?",
    answer:
      "Yes, our interface supports both light and dark modes to reduce eye strain in different environments.",
  },
  {
    category: "pos-services",
    question: "Does it support barcoding?",
    answer: "Yes, it works with all standard 1D and 2D/QR barcode scanners.",
  },
  {
    category: "pos-services",
    question: "Can I print barcode labels?",
    answer:
      "Yes, you can design and print custom barcode labels directly from the inventory module.",
  },
  {
    category: "pos-services",
    question: "Is there a customer-facing display option?",
    answer:
      "Yes, we support dual-screen setups where customers can see their items and total in real-time.",
  },
  {
    category: "pos-services",
    question: "Can I manage table layouts?",
    answer:
      "Yes, for restaurants, we provide a visual table management tool with status indicators.",
  },
  {
    category: "pos-services",
    question: "Does it support weighing scale integration?",
    answer:
      "Yes, we integrate with several RS232 and USB weighing scales for grocery and deli use.",
  },
  {
    category: "pos-services",
    question: "Can I process tax-exempt sales?",
    answer:
      "Yes, you can flag specific customers or transactions as tax-exempt for authorized organizations.",
  },
  {
    category: "pos-services",
    question: "How secure is the transaction data?",
    answer:
      "All transaction data is encrypted and synced over secure HTTPS connections.",
  },

  // --- PRICING & BILLING (20) ---
  {
    category: "pricing",
    question: "How do I change my billing method?",
    answer:
      "You can update your payment information through the Billing section of your Vexel Dashboard. We support major credit cards, wire transfers, and localized payment gateways.",
  },
  {
    category: "pricing",
    question: "Are there any hidden transaction fees?",
    answer:
      "No, we believe in transparent pricing. Our standard transaction fees are clearly outlined in your plan agreement, with no surprise costs.",
  },
  {
    category: "pricing",
    question: "Do you offer annual discounts?",
    answer:
      "Yes, paying annually gives you a 20% discount compared to monthly billing.",
  },
  {
    category: "pricing",
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, there are no long-term contracts. You can cancel at the end of your current billing cycle.",
  },
  {
    category: "pricing",
    question: "What happens if I miss a payment?",
    answer:
      "We offer a 7-day grace period for failed payments. After that, your access might be restricted until the balance is cleared.",
  },
  {
    category: "pricing",
    question: "Do you offer a free trial?",
    answer:
      "Yes, we offer a 14-day full-featured free trial so you can test the system before committing.",
  },
  {
    category: "pricing",
    question: "Is there a setup fee?",
    answer:
      "Some enterprise plans require a one-time setup fee for data migration and custom hardware configuration.",
  },
  {
    category: "pricing",
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, you can change your plan at any time through the dashboard. Upgrades take effect immediately.",
  },
  {
    category: "pricing",
    question: "Are software updates included in the price?",
    answer:
      "Yes, all cloud software updates and bug fixes are included in your subscription.",
  },
  {
    category: "pricing",
    question: "Is technical support free?",
    answer:
      "Standard email and chat support are included in all plans. Premium 24/7 phone support is available on higher tiers.",
  },
  {
    category: "pricing",
    question: "Do you offer educational or non-profit discounts?",
    answer:
      "Yes, we provide special pricing for registered NGOs and educational institutions.",
  },
  {
    category: "pricing",
    question: "How are additional registers billed?",
    answer: "Additional registers are billed as a flat monthly add-on fee.",
  },
  {
    category: "pricing",
    question: "What currency will I be billed in?",
    answer:
      "Local clients are billed in LKR, while international clients are billed in USD.",
  },
  {
    category: "pricing",
    question: "Do prices include VAT/GST?",
    answer:
      "Taxes are calculated based on your location and added to the subtotal where applicable.",
  },
  {
    category: "pricing",
    question: "Can I get a refund for an unused period?",
    answer:
      "We generally do not provide pro-rated refunds for cancellations mid-cycle, but we handle exceptions on a case-by-case basis.",
  },
  {
    category: "pricing",
    question: "Is there a cost for mobile app access?",
    answer:
      "The mobile dashboard for owners is included in all standard plans.",
  },
  {
    category: "pricing",
    question: "Do you match competitor pricing?",
    answer:
      "While we don't have a formal price-match policy, our value-to-cost ratio is among the best in the industry.",
  },
  {
    category: "pricing",
    question: "How do I download my monthly invoices?",
    answer:
      "Invoices are available for download in PDF format under Settings > Billing > History.",
  },
  {
    category: "pricing",
    question: "Is there a limit to the number of users I can add?",
    answer:
      "Most plans allow for a generous number of staff accounts, with unlimited options on Enterprise tiers.",
  },
  {
    category: "pricing",
    question: "Can I pay via bank transfer?",
    answer:
      "Yes, we accept bank transfers for annual subscriptions and hardware purchases.",
  },

  // --- TECH SUPPORT (20) ---
  {
    category: "tech-support",
    question: "How do I contact technical support?",
    answer:
      "You can reach our support team [contact@vexelsystems.lk](mailto:contact@vexelsystems.lk) or call us at +94 74 096 8108. We are available Monday to Friday, 9:00 AM to 5:00 PM.",
  },
  {
    category: "tech-support",
    question: "What is your average response time?",
    answer:
      "We aim to respond to all chat inquiries within 5 minutes and emails within 2 hours during business hours.",
  },
  {
    category: "tech-support",
    question: "Do you offer on-site support?",
    answer:
      "Yes, for hardware installations and complex troubleshooting, we can dispatch technicians to your location.",
  },
  {
    category: "tech-support",
    question: "How do I report a bug?",
    answer:
      "Please use the 'Bug Report' form in the Help Center or send details and screenshots to our support email.",
  },
  {
    category: "tech-support",
    question: "Is there a status page for your services?",
    answer:
      "Yes, you can check system health and scheduled maintenance at status.vexelsystems.lk.",
  },
  {
    category: "tech-support",
    question: "Can you help me migrate data from my old system?",
    answer:
      "Yes, our technical team specializes in data migration from platforms like QuickBooks, Odoo, and local legacy systems.",
  },
  {
    category: "tech-support",
    question: "Do you provide API documentation?",
    answer:
      "Yes, full documentation for our public API is available at developers.vexelsystems.lk.",
  },
  {
    category: "tech-support",
    question: "What browsers do you support?",
    answer:
      "We support the latest versions of Chrome, Safari, Firefox, and Microsoft Edge.",
  },
  {
    category: "tech-support",
    question: "Can I request a new feature?",
    answer:
      "Yes! We love hearing from our users. You can submit feature requests through the 'Feedback' section of your dashboard.",
  },
  {
    category: "tech-support",
    question: "Do you offer remote desktop assistance?",
    answer:
      "Yes, with your permission, our engineers can use tools like TeamViewer or Anydesk to assist you remotely.",
  },
  {
    category: "tech-support",
    question: "What should I do if my POS is down?",
    answer:
      "First, check your internet. If it's an app issue, try Restarting the app. If it persists, call our urgent support line immediately.",
  },
  {
    category: "tech-support",
    question: "How do I reset my password?",
    answer:
      "Click 'Forgot Password' on the login screen, and we'll send a reset link to your registered email.",
  },
  {
    category: "tech-support",
    question: "Can I have a dedicated account manager?",
    answer:
      "Enterprise clients are assigned a dedicated Success Manager for personalized support and training.",
  },
  {
    category: "tech-support",
    question: "Do you provide video tutorials?",
    answer:
      "Yes, we have a comprehensive YouTube channel and a Knowledge Base with step-by-step videos.",
  },
  {
    category: "tech-support",
    question: "How do I clear my cache if I see old data?",
    answer:
      "In the dashboard, you can click 'Sync Data' or use your browser's hard refresh (Ctrl/Cmd + Shift + R).",
  },
  {
    category: "tech-support",
    question: "Do you support third-party hardware drivers?",
    answer:
      "We primarily support drivers for our certified hardware. For others, we provide generic drivers where compatible.",
  },
  {
    category: "tech-support",
    question: "Can I get a copy of my data backup?",
    answer:
      "Yes, you can request a full database export through your account security settings.",
  },
  {
    category: "tech-support",
    question: "How do I update my contact information?",
    answer:
      "Go to Settings > Account Profile to update your email, phone, and business address.",
  },
  {
    category: "tech-support",
    question: "What is your uptime guarantee?",
    answer: "We guarantee a 99.9% monthly uptime for all cloud services.",
  },
  {
    category: "tech-support",
    question: "Where can I find my account ID?",
    answer: "Your Account ID is visible at the bottom of the 'Settings' menu.",
  },

  // --- HARDWARE SETUP (20) ---
  {
    category: "hardware",
    question: "How do I connect my receipt printer?",
    answer:
      "Most printers connect via USB, LAN, or Bluetooth. Once plugged in, go to POS Settings > Peripherals to pair it.",
  },
  {
    category: "hardware",
    question: "Which barcode scanners are compatible?",
    answer:
      "We support almost all HID-compliant USB and Bluetooth scanners. Simply plug and play.",
  },
  {
    category: "hardware",
    question: "How do I set up the kitchen display (KDS)?",
    answer:
      "Install the Vexel KDS app on your kitchen tablet and link it to your main register via the local network.",
  },
  {
    category: "hardware",
    question: "My cash drawer won't open automatically. Why?",
    answer:
      "Ensure the drawer is connected to the printer via the RJ11 cable and 'Open Drawer on Sale' is enabled in settings.",
  },
  {
    category: "hardware",
    question: "Can I use an iPad as my POS terminal?",
    answer:
      "Yes, our POS app is fully optimized for iPadOS and Android tablets.",
  },
  {
    category: "hardware",
    question: "What should I do if the printer is printing gibberish?",
    answer:
      "This is usually a baud rate or driver mismatch. Ensure you've selected the correct printer model in Vexel settings.",
  },
  {
    category: "hardware",
    question: "How do I calibrate my touch screen?",
    answer:
      "Screen calibration is usually handled by the OS settings. In Vexel, you can adjust the UI scaling for easier Tapping.",
  },
  {
    category: "hardware",
    question: "Does Vexel sell hardware directly?",
    answer:
      "Yes, we sell certified POS bundles including terminals, printers, and scanners on our website.",
  },
  {
    category: "hardware",
    question: "What is the warranty on Vexel hardware?",
    answer:
      "All Vexel-branded hardware comes with a 1-year replacement warranty.",
  },
  {
    category: "hardware",
    question: "Can I connect multiple printers to one register?",
    answer:
      "Yes, you can set up one for receipts, one for the kitchen, and one for labels simultaneously.",
  },
  {
    category: "hardware",
    question: "How do I set up the pole display?",
    answer:
      "Connect it via USB/Serial and enable 'Line Display' in the POS hardware settings.",
  },
  {
    category: "hardware",
    question: "Does the system support RFID scanners?",
    answer:
      "Yes, for inventory management, we support various USB RFID readers.",
  },
  {
    category: "hardware",
    question: "How do I improve my Bluetooth scanner range?",
    answer:
      "Ensure there is a clear line of sight and avoid placing the router or other high-EMF devices near the scanner.",
  },
  {
    category: "hardware",
    question: "My tablet is running slow. Any tips?",
    answer:
      "Ensure other background apps are closed and that you have at least 2GB of free storage space.",
  },
  {
    category: "hardware",
    question: "Can I use a standard desktop printer for invoices?",
    answer:
      "Yes, you can print A4/Letter size invoices to any Windows/Mac shared printer.",
  },
  {
    category: "hardware",
    question: "How do I change the paper roll?",
    answer:
      "Open the printer lid, place the roll with the paper feeding from the bottom, and close the lid firmly.",
  },
  {
    category: "hardware",
    question: "Is the hardware spill-resistant?",
    answer:
      "Our premium POS terminals are rated IP54 for dust and water resistance, protecting against accidental spills.",
  },
  {
    category: "hardware",
    question: "How do I connect to a local server?",
    answer:
      "In the app settings, enter the local IP address of your Vexel Bridge server.",
  },
  {
    category: "hardware",
    question: "What is a Vexel Bridge?",
    answer:
      "It's a small hardware device that allows your POS terminals to communicate and print even when the internet is down.",
  },
  {
    category: "hardware",
    question: "Can I use a wireless kitchen printer?",
    answer:
      "Yes, we recommend using Wi-Fi (IP) printers for the kitchen to avoid cable clutter.",
  },

  // --- SOFTWARE UPDATES (20) ---
  {
    category: "updates",
    question: "How often do you release updates?",
    answer:
      "We release minor updates and bug fixes weekly, and major feature updates every month.",
  },
  {
    category: "updates",
    question: "Will I lose my data during an update?",
    answer:
      "No, all data is safely stored in the cloud. Software updates only improve functionality and security.",
  },
  {
    category: "updates",
    question: "How do I update the POS app?",
    answer:
      "If you're on a tablet, update via the App Store or Google Play. On desktop, the app will auto-update on launch.",
  },
  {
    category: "updates",
    question: "Can I opt-out of an update?",
    answer:
      "For security and compatibility, we require all users to be on a version no older than 3 months.",
  },
  {
    category: "updates",
    question: "Where can I see what's new in an update?",
    answer:
      "Check the 'What's New' popup in your dashboard or visit vexelsystems.lk/changelog.",
  },
  {
    category: "updates",
    question: "Does the hardware firmware need updates?",
    answer:
      "Occasionally, yes. These can be triggered directly from the 'Hardware Maintenance' section in settings.",
  },
  {
    category: "updates",
    question: "What happens if an update fails?",
    answer:
      "The system will automatically roll back to the previous stable version and notify our support team.",
  },
  {
    category: "updates",
    question: "Is there a cost for updates?",
    answer:
      "No, all software updates are included in your active subscription.",
  },
  {
    category: "updates",
    question: "How do I join the Beta testing program?",
    answer:
      "You can enable 'Beta Features' in your account settings to test new tools before the general release.",
  },
  {
    category: "updates",
    question: "Can I schedule updates for after-hours?",
    answer:
      "Most updates are seamless. For major infrastructure changes, we schedule them during low-traffic periods (1 AM - 4 AM).",
  },
  {
    category: "updates",
    question: "Do I need high-speed internet to update?",
    answer:
      "A stable connection is required. Most updates are under 50MB and take less than a minute.",
  },
  {
    category: "updates",
    question: "Will an update change my settings?",
    answer:
      "No, your business configurations, tax rules, and user permissions remain untouched.",
  },
  {
    category: "updates",
    question: "Does Vexel support older operating systems?",
    answer:
      "We support Windows 10+, macOS 11+, and iOS 14+. Older versions may not receive all performance updates.",
  },
  {
    category: "updates",
    question: "How do I know if I'm on the latest version?",
    answer:
      "Check the 'About' section in settings. If an update is available, a 'New Version' badge will appear.",
  },
  {
    category: "updates",
    question: "Can I update one register at a time?",
    answer:
      "Yes, but we recommend updating all terminals simultaneously to ensure data consistency.",
  },
  {
    category: "updates",
    question: "What is an 'Emergency Patch'?",
    answer:
      "It's a critical update released immediately to fix a security vulnerability or a blocking bug.",
  },
  {
    category: "updates",
    question: "Are there updates for the mobile dashboard?",
    answer: "Yes, these are delivered through the standard app stores.",
  },
  {
    category: "updates",
    question: "Do you provide training for major new features?",
    answer:
      "Yes, we release documentation, webinars, and in-app guides for every major feature release.",
  },
  {
    category: "updates",
    question: "Can I request a rollback?",
    answer:
      "Rollbacks are only performed by our engineering team in cases of widespread technical issues.",
  },
  {
    category: "updates",
    question: "Does Vexel use the cloud for all updates?",
    answer:
      "Yes, our architecture allows us to push UI updates instantly without requiring a full app re-install.",
  },

  // --- SECURITY & PRIVACY (20) ---
  {
    category: "security",
    question: "Is my data safe with Vexel?",
    answer:
      "Yes, we use AES-256 encryption for data at rest and TLS 1.3 for data in transit. Your data is stored on SOC2-compliant servers.",
  },
  {
    category: "security",
    question: "Who owns my data?",
    answer:
      "You do. Vexel Systems acts as a data processor, but you retain 100% ownership of your business and customer data.",
  },
  {
    category: "security",
    question: "Do you sell our data to third parties?",
    answer:
      "No. We never sell, share, or monetize your business or customer data with any third party.",
  },
  {
    category: "security",
    question: "Does Vexel support Two-Factor Authentication (2FA)?",
    answer:
      "Yes, we support 2FA via SMS, Email, and Authenticator apps (Google/Microsoft).",
  },
  {
    category: "security",
    question: "Can I control what my employees can see?",
    answer:
      "Yes, our 'Granular Permissions' system allows you to restrict access to reports, settings, and specific POS actions.",
  },
  {
    category: "security",
    question: "Is the system PCI-DSS compliant?",
    answer:
      "Yes, we follow strict PCI standards for handling payment data. We never store full credit card numbers on our servers.",
  },
  {
    category: "security",
    question: "How often do you backup data?",
    answer:
      "We perform real-time incremental backups and full daily snapshots across multiple geographic regions.",
  },
  {
    category: "security",
    question: "What happens if a device is stolen?",
    answer:
      "You can remotely de-authorize any device from your dashboard to prevent unauthorized access.",
  },
  {
    category: "security",
    question: "Are your servers located in Sri Lanka?",
    answer:
      "We use a hybrid cloud approach with primary servers in Singapore and Mumbai for low latency and high reliability.",
  },
  {
    category: "security",
    question: "Do you have a vulnerability disclosure program?",
    answer:
      "Yes, we welcome security researchers. Please contact security@vexelsystems.lk for our policy.",
  },
  {
    category: "security",
    question: "Is Vexel compliant with GDPR?",
    answer:
      "Yes, we are fully GDPR compliant and provide tools to help you manage 'Right to Erasure' requests from customers.",
  },
  {
    category: "security",
    question: "Can I see a log of who logged in?",
    answer:
      "Yes, the 'Audit Log' section shows every login attempt, setting change, and sensitive action taken.",
  },
  {
    category: "security",
    question: "How do you protect against Ransomware?",
    answer:
      "Our cloud architecture and immutable backups ensure your data can be restored even in extreme scenarios.",
  },
  {
    category: "security",
    question: "Do you use cookies on the dashboard?",
    answer:
      "We use essential session cookies to keep you logged in and functional cookies to remember your preferences.",
  },
  {
    category: "security",
    question: "How do I report a security concern?",
    answer:
      "Please email security@vexelsystems.lk immediately with details of your observation.",
  },
  {
    category: "security",
    question: "Are staff passwords encrypted?",
    answer:
      "Yes, we use the bcrypt hashing algorithm with a high work factor to ensure passwords are never stored in plain text.",
  },
  {
    category: "security",
    question: "Can I restrict login to certain IP addresses?",
    answer:
      "Yes, enterprise clients can enable 'IP Whitelisting' for their management dashboard.",
  },
  {
    category: "security",
    question: "Does Vexel store biometric data?",
    answer:
      "No. If you use fingerprint scanners, the templates are stored locally on the secure enclave of the hardware, not in the cloud.",
  },
  {
    category: "security",
    question: "How do I permanently delete my account?",
    answer:
      "You can request account deletion through settings. This will purge all your data after a 30-day verify period.",
  },
  {
    category: "security",
    question: "Do you perform regular security audits?",
    answer:
      "Yes, we conduct quarterly internal audits and annual third-party penetration tests.",
  },

  // --- ADVANCED ANALYTICS (20) ---
  {
    category: "analytics",
    question: "What kind of reports can I generate?",
    answer:
      "Vexel provides over 50+ built-in reports covering Sales, Inventory, Tax, Employee Performance, and Customer Loyalty.",
  },
  {
    category: "analytics",
    question: "Can I customize the reports?",
    answer:
      "Yes, you can use filters, date ranges, and custom columns to tailor reports to your specific needs.",
  },
  {
    category: "analytics",
    question: "Is real-time reporting available?",
    answer:
      "Absolutely. All data from your registers is synced instantly to the cloud and visible on your dashboard.",
  },
  {
    category: "analytics",
    question: "Can I schedule reports to be emailed to me?",
    answer:
      "Yes, you can set up daily, weekly, or monthly report deliveries to one or more email addresses.",
  },
  {
    category: "analytics",
    question: "Does Vexel support predictive analytics?",
    answer:
      "Our higher-tier plans use AI to forecast sales trends and suggest inventory reorder levels based on historical data.",
  },
  {
    category: "analytics",
    question: "Can I see my most profitable products?",
    answer:
      "Yes, the 'Product Performance' report allows you to sort items by revenue, margin, and volume.",
  },
  {
    category: "analytics",
    question: "Is there a report for tax filing?",
    answer:
      "Yes, our 'Tax Summary' report provides all the figures you need for your monthly or quarterly filings.",
  },
  {
    category: "analytics",
    question: "Can I compare performance between different stores?",
    answer:
      "Yes, the 'Multi-store Comparison' dashboard provides side-by-side metrics for all your locations.",
  },
  {
    category: "analytics",
    question: "Do you track employee sales performance?",
    answer:
      "Yes, you can see sales, average transaction value, and items sold per employee.",
  },
  {
    category: "analytics",
    question: "Can I track customer demographic data?",
    answer:
      "If you collect this data during loyalty signup, you can run reports on customer segments and spending habits.",
  },
  {
    category: "analytics",
    question: "Does Vexel track cost of goods sold (COGS)?",
    answer:
      "Yes, as long as you enter your purchase prices, Vexel will calculate your COGS and gross profit accurately.",
  },
  {
    category: "analytics",
    question: "Can I see a heat map of my busiest hours?",
    answer:
      "Yes, the 'Sales by Hour' report provides a visual representation of your peak traffic times.",
  },
  {
    category: "analytics",
    question: "Is there an audit log for price overrides?",
    answer:
      "Yes, every manual discount or price change is logged with the reason and the employee who performed it.",
  },
  {
    category: "analytics",
    question: "Can I export data for QuickBooks or Xero?",
    answer:
      "Yes, we provide specialized exports that are compatible with major accounting software.",
  },
  {
    category: "analytics",
    question: "Does Vexel support custom SQL queries?",
    answer:
      "This is available for Enterprise clients who need to build highly specialized internal dashboards.",
  },
  {
    category: "analytics",
    question: "How long is my historical data kept?",
    answer:
      "We keep your sales data indefinitely as long as your account is active.",
  },
  {
    category: "analytics",
    question: "Can I track voids and returns separately?",
    answer:
      "Yes, 'Loss Prevention' reports highlight voids, returns, and canceled transactions for management review.",
  },
  {
    category: "analytics",
    question: "Do you offer visual dashboards?",
    answer:
      "Yes, the main dashboard features interactive charts and gauges for a quick pulse-check of your business.",
  },
  {
    category: "analytics",
    question: "Can I track marketing campaign ROI?",
    answer:
      "Yes, by using 'Promo Codes' or 'Campaign Tags' at checkout, you can track the success of specific promos.",
  },
  {
    category: "analytics",
    question: "Is there a mobile app for analytics?",
    answer:
      "Yes, the Vexel Dashboard app is designed specifically for quick mobile reporting.",
  },

  // --- INTEGRATIONS (20) ---
  {
    category: "integrations",
    question: "Does Vexel integrate with WhatsApp?",
    answer:
      "Yes, you can send digital receipts, loyalty updates, and promotions directly to customers via WhatsApp.",
  },
  {
    category: "integrations",
    question: "Can I connect my e-commerce store?",
    answer:
      "Yes, we provide native integrations for Shopify, WooCommerce, and Magento to sync inventory and orders.",
  },
  {
    category: "integrations",
    question: "Does it work with QuickBooks or Xero?",
    answer:
      "Yes, we offer direct sync for sales and expense data to both QuickBooks Online and Xero.",
  },
  {
    category: "integrations",
    question: "Can I integrate with food delivery apps?",
    answer:
      "Yes, we integrate with UberEats, PickMe, and DoorDash to bring all your orders into one POS system.",
  },
  {
    category: "integrations",
    question: "Do you have an open API?",
    answer:
      "Yes, our REST API allows developers to build custom connections to any third-party system.",
  },
  {
    category: "integrations",
    question: "Does Vexel work with Salesforce or Hubspot?",
    answer:
      "Yes, we can sync customer data and purchase history to major CRM platforms.",
  },
  {
    category: "integrations",
    question: "Can I connect my Outlook or Google Calendar?",
    answer:
      "Service-based businesses can sync their bookings and appointments with their primary calendars.",
  },
  {
    category: "integrations",
    question: "Does it support payment gateway integrations?",
    answer:
      "We integrate with Stripe, PayPal, Razorpay, and several local banks for seamless processing.",
  },
  {
    category: "integrations",
    question: "Can I use Zapier with Vexel?",
    answer:
      "Yes, our Zapier app allows you to connect Vexel to 5,000+ other web applications.",
  },
  {
    category: "integrations",
    question: "Does it integrate with Mailchimp?",
    answer:
      "Yes, you can automatically sync your customer email list to Mailchimp for marketing campaigns.",
  },
  {
    category: "integrations",
    question: "Can I connect my existing surveillance system?",
    answer:
      "For enterprise clients, we can overlay transaction data onto your CCTV footage for enhanced security.",
  },
  {
    category: "integrations",
    question: "Does Vexel support EDI for suppliers?",
    answer:
      "Yes, we support Electronic Data Interchange for automated ordering with large-scale distributors.",
  },
  {
    category: "integrations",
    question: "Can I integrate with Slack or Microsoft Teams?",
    answer:
      "Yes, you can receive instant notifications for large sales, low stock, or daily summaries in your team chat.",
  },
  {
    category: "integrations",
    question: "Does it work with Google My Business?",
    answer:
      "Yes, we can sync your store hours and product availability to your Google search profile.",
  },
  {
    category: "integrations",
    question: "Can I connect a digital signage system?",
    answer:
      "Yes, you can push live menu prices or promotions from Vexel to your in-store digital screens.",
  },
  {
    category: "integrations",
    question: "Is there an integration for hotel management (PMS)?",
    answer:
      "Yes, we integrate with several leading Property Management Systems to charge restaurant bills to guest rooms.",
  },
  {
    category: "integrations",
    question: "Does it support weighing scale protocols?",
    answer:
      "Yes, we support standard protocols for integrating scales from CAS, Mettler Toledo, and others.",
  },
  {
    category: "integrations",
    question: "Can I integrate with a custom loyalty app?",
    answer:
      "Yes, using our API, you can link your custom mobile app to the Vexel loyalty engine.",
  },
  {
    category: "integrations",
    question: "Does Vexel support Webhooks?",
    answer:
      "Yes, you can set up Webhooks to be notified of events like 'Sale Completed' or 'Inventory Low' in real-time.",
  },
  {
    category: "integrations",
    question: "Are there any fees for integrations?",
    answer:
      "Native integrations are included in specific plan tiers. Custom API access may require an add-on.",
  },

  // --- MOBILE APPLICATION (20) ---
  {
    category: "mobile",
    question: "Is there a Vexel app for iPhone and Android?",
    answer:
      "Yes, search for 'Vexel Dashboard' in the Apple App Store or Google Play Store.",
  },
  {
    category: "mobile",
    question: "Can I process sales from my phone?",
    answer:
      "Yes, the Vexel POS GO app allows you to take orders and process payments directly from your smartphone.",
  },
  {
    category: "mobile",
    question: "Do I get push notifications for sales?",
    answer:
      "Yes, you can enable real-time notifications for every sale or periodic summaries.",
  },
  {
    category: "mobile",
    question: "Can I manage inventory from the mobile app?",
    answer:
      "Yes, you can add products, update prices, and perform stock counts using your phone's camera as a scanner.",
  },
  {
    category: "mobile",
    question: "Is the mobile app free?",
    answer:
      "The Vexel Dashboard (for owners) is free. The mobile POS app may require a specific license tier.",
  },
  {
    category: "mobile",
    question: "Can I see live store footage on the app?",
    answer:
      "If you have integrated CCTV, you can view your camera feeds directly within the Vexel app.",
  },
  {
    category: "mobile",
    question: "Does the app work offline?",
    answer:
      "The mobile POS app supports offline sales, which sync when you're back online. The dashboard requires an active connection.",
  },
  {
    category: "mobile",
    question: "Can I manage employee shifts via mobile?",
    answer:
      "Yes, you can view the 'Who's In' list and approve leave requests from your phone.",
  },
  {
    category: "mobile",
    question: "How do I secure the mobile app?",
    answer:
      "We support FaceID, TouchID, and PIN codes to ensure your business data is protected if you lose your phone.",
  },
  {
    category: "mobile",
    question: "Can I print to a receipt printer from my phone?",
    answer:
      "Yes, the app can connect to Bluetooth or Wi-Fi printers for mobile receipt printing.",
  },
  {
    category: "mobile",
    question: "Does the app support dark mode?",
    answer:
      "Yes, it follows your system's light/dark mode settings automatically.",
  },
  {
    category: "mobile",
    question: "Can I manage multiple businesses in one app?",
    answer:
      "Yes, you can easily switch between different business accounts if you own more than one.",
  },
  {
    category: "mobile",
    question: "Is there a tablet-specific version of the app?",
    answer:
      "Yes, our tablet app offers a more expansive layout optimized for large screens.",
  },
  {
    category: "mobile",
    question: "Can I see a map of my delivery drivers?",
    answer:
      "If you use our delivery module, you can track your drivers' locations in real-time on a map.",
  },
  {
    category: "mobile",
    question: "How do I update the app?",
    answer:
      "Updates are delivered through the standard App Store or Play Store updates.",
  },
  {
    category: "mobile",
    question: "Can I use the app on an Apple Watch?",
    answer:
      "Currently, we offer a companion app for Apple Watch that shows basic daily sales totals.",
  },
  {
    category: "mobile",
    question: "What is the minimum OS version required?",
    answer: "We support iOS 14+ and Android 9.0+.",
  },
  {
    category: "mobile",
    question: "Can I chat with my staff through the app?",
    answer:
      "Yes, the app includes an internal team messenger for quick communication.",
  },
  {
    category: "mobile",
    question: "Can I issue refunds from the mobile app?",
    answer:
      "Yes, managers with proper permissions can process refunds directly from the mobile dashboard.",
  },
  {
    category: "mobile",
    question: "Does the app consume a lot of data?",
    answer:
      "No, we use highly optimized data packets. A typical day of monitoring uses less than 10MB.",
  },

  // --- INVENTORY MANAGEMENT (20) ---
  {
    category: "inventory",
    question: "How do I add a new product?",
    answer:
      "Go to Products > Add New. You can enter the name, category, price, cost, and upload an image.",
  },
  {
    category: "inventory",
    question: "Can I import products in bulk?",
    answer:
      "Yes, you can upload a CSV or Excel file to add or update thousands of products in seconds.",
  },
  {
    category: "inventory",
    question: "Does Vexel support barcode scanning for stock counts?",
    answer:
      "Yes, you can use a USB scanner or the Vexel mobile app to perform fast, accurate stocktakes.",
  },
  {
    category: "inventory",
    question: "What is a 'Low Stock Alert'?",
    answer:
      "You can set a minimum threshold for each product, and we'll notify you when it's time to reorder.",
  },
  {
    category: "inventory",
    question: "Does the system support product variations?",
    answer:
      "Yes, you can easily manage items with different sizes, colors, or materials (e.g., T-shirts).",
  },
  {
    category: "inventory",
    question: "Can I track inventory across multiple locations?",
    answer:
      "Yes, our multi-store module allows you to see and transfer stock between different branches.",
  },
  {
    category: "inventory",
    question: "What is 'Composite Products' or 'Bundles'?",
    answer:
      "You can create a single product that subtracts multiple items from inventory when sold (e.g., a Gift Basket).",
  },
  {
    category: "inventory",
    question: "How do I manage supplier information?",
    answer:
      "You can save supplier details, link them to products, and generate Purchase Orders directly in Vexel.",
  },
  {
    category: "inventory",
    question: "Does Vexel support serial number tracking?",
    answer:
      "Yes, for high-value items, you can track specific units using their unique serial numbers.",
  },
  {
    category: "inventory",
    question: "Can I track ingredients for my restaurant?",
    answer:
      "Yes, our 'Recipe Management' module allows you to deduct ingredients like flour or milk based on dish sales.",
  },
  {
    category: "inventory",
    question: "Does the system support expiry date tracking?",
    answer:
      "Yes, you can enter expiry dates and receive alerts before products go bad.",
  },
  {
    category: "inventory",
    question: "What is 'Partial Inventory Count'?",
    answer:
      "It allows you to count a specific category or shelf without pausing your entire store's operations.",
  },
  {
    category: "inventory",
    question: "Can I print barcode labels from the inventory module?",
    answer:
      "Yes, you can design custom labels with price, barcode, and name to print on any label printer.",
  },
  {
    category: "inventory",
    question: "Does Vexel calculate my inventory value?",
    answer:
      "Yes, you can run an 'Inventory Valuation' report to see the total value of your stock at any time.",
  },
  {
    category: "inventory",
    question: "Can I set different prices for different stores?",
    answer:
      "Yes, you can override default pricing for specific locations or regions.",
  },
  {
    category: "inventory",
    question: "How do I handle damaged or lost stock?",
    answer:
      "Use the 'Inventory Adjustment' tool to record waste, breakage, or shrinkage with a reason code.",
  },
  {
    category: "inventory",
    question: "Can I track 'Cost Price' changes over time?",
    answer:
      "Yes, Vexel uses FIFO or Weighted Average methods to track your margin as purchase costs fluctuate.",
  },
  {
    category: "inventory",
    question: "Does it support automated Purchase Orders?",
    answer:
      "Yes, you can set the system to auto-generate POs when items hit their reorder points.",
  },
  {
    category: "inventory",
    question: "Can I hide products from the POS?",
    answer:
      "Yes, you can mark products as 'Online Only' or 'Hidden' so they don't appear on the cashier's screen.",
  },
  {
    category: "inventory",
    question: "Is there a limit to the number of categories?",
    answer:
      "No, you can create a multi-level category hierarchy to keep your inventory organized.",
  },

  // --- EMPLOYEE MANAGEMENT (20) ---
  {
    category: "employees",
    question: "How do I add a new staff member?",
    answer:
      "Go to Settings > Staff > Add New. You can set their name, email, and assign a specific role with permissions.",
  },
  {
    category: "employees",
    question: "Can I track staff working hours?",
    answer:
      "Yes, staff can clock in and out directly on the POS. You can run 'Timecard Reports' to see total hours worked.",
  },
  {
    category: "employees",
    question: "How do I set up permissions for cashiers?",
    answer:
      "In the 'Roles' section, you can create a 'Cashier' role and uncheck permissions for things like 'Delete Sale' or 'Apply Manual Discount'.",
  },
  {
    category: "employees",
    question: "Can I see who processed a specific transaction?",
    answer:
      "Yes, every sale is linked to the staff member who was logged into the register at that time.",
  },
  {
    category: "employees",
    question: "Does Vexel support shift management?",
    answer:
      "Yes, you can manage 'Cash Drawer Shifts' to track the starting cash, sales, and discrepancies for each employee's session.",
  },
  {
    category: "employees",
    question: "Can I track staff sales targets?",
    answer:
      "Yes, you can set monthly sales goals for each employee and track their progress through the 'Staff Performance' dashboard.",
  },
  {
    category: "employees",
    question: "How do I handle staff tips?",
    answer:
      "Vexel can track tips added during payment. You can run a 'Tip Report' to distribute them fairly among your team.",
  },
  {
    category: "employees",
    question: "Can I restrict staff from opening the cash drawer?",
    answer:
      "Yes, you can set a permission that only allows the drawer to open during a cash sale or with manager authorization.",
  },
  {
    category: "employees",
    question: "What happens if an employee forgets their PIN?",
    answer:
      "An admin can reset any staff member's PIN or Password through the management dashboard.",
  },
  {
    category: "employees",
    question: "Can I manage multiple roles (e.g., Manager, Waiter, Chef)?",
    answer:
      "Yes, you can create unlimited custom roles with specific access levels for each department.",
  },
  {
    category: "employees",
    question: "Does Vexel support biometric login?",
    answer:
      "Yes, if your hardware supports it, staff can log in using their fingerprint for enhanced security.",
  },
  {
    category: "employees",
    question: "Can I track commission for my sales team?",
    answer:
      "Yes, you can set commission percentages for specific products or staff members and run 'Commission Reports'.",
  },
  {
    category: "employees",
    question: "How do I deactivate a former employee?",
    answer:
      "Simply go to Staff > Edit and change their status to 'Inactive'. This prevents them from logging in but keeps their historical data.",
  },
  {
    category: "employees",
    question: "Can I see an audit log of staff activity?",
    answer:
      "Yes, the 'Audit Log' shows every sensitive action taken by staff, such as price overrides or voided sales.",
  },
  {
    category: "employees",
    question: "Is there a limit to the number of staff members?",
    answer:
      "Most plans support a generous number of staff accounts. 'Enterprise' plans support unlimited staff.",
  },
  {
    category: "employees",
    question: "Can staff see the store's total revenue?",
    answer:
      "Only if you give them the 'View Reports' permission. Most businesses restrict this to Managers only.",
  },
  {
    category: "employees",
    question: "Can I manage staff schedules in Vexel?",
    answer:
      "Currently, we offer integration with scheduling tools like Homebase and 7shifts for advanced rostering.",
  },
  {
    category: "employees",
    question: "Does the system handle payroll?",
    answer:
      "We track hours and earnings, which can be exported to your payroll provider or accounting software.",
  },
  {
    category: "employees",
    question: "Can staff use their own devices to log in?",
    answer:
      "Yes, if you allow 'Mobile Access', they can use the Vexel app on their own phones for specific tasks.",
  },
  {
    category: "employees",
    question: "How do I set up a 'Manager PIN' for overrides?",
    answer:
      "Ensure the manager has the 'Authorize Sensitive Actions' permission. They can then enter their PIN to approve a cashier's request.",
  },

  // --- CUSTOMER LOYALTY (20) ---
  {
    category: "loyalty",
    question: "How do I set up a loyalty program?",
    answer:
      "Go to Marketing > Loyalty. You can choose to award points based on 'Amount Spent' or 'Number of Visits'.",
  },
  {
    category: "loyalty",
    question: "Can customers redeem points for discounts?",
    answer:
      "Yes, you can set custom redemption rules (e.g., 100 points = Rs. 500 off).",
  },
  {
    category: "loyalty",
    question: "How do customers sign up?",
    answer:
      "They can sign up at the register by providing their name and phone number/email, or via a QR code on their receipt.",
  },
  {
    category: "loyalty",
    question: "Can I send automated birthday rewards?",
    answer:
      "Yes, if you collect birth dates, Vexel can automatically email or SMS a special discount on their birthday.",
  },
  {
    category: "loyalty",
    question: "Does Vexel support physical loyalty cards?",
    answer:
      "Yes, you can scan QR or Barcoded loyalty cards, or simply look up customers by their phone number.",
  },
  {
    category: "loyalty",
    question: "Can I see a customer's purchase history?",
    answer:
      "Yes, every loyalty member has a profile showing their total spend, favorite items, and visit frequency.",
  },
  {
    category: "loyalty",
    question: "Is there a 'VIP' tier system?",
    answer:
      "Higher-tier plans allow you to create levels (e.g., Silver, Gold, Platinum) with increasing rewards.",
  },
  {
    category: "loyalty",
    question: "Can I import existing customer data?",
    answer:
      "Yes, you can upload a CSV file with your current customer list and their starting point balances.",
  },
  {
    category: "loyalty",
    question: "Can I track store credit?",
    answer:
      "Yes, instead of a refund, you can issue 'Store Credit' which is saved to the customer's loyalty profile.",
  },
  {
    category: "loyalty",
    question: "Does Vexel support digital punch cards?",
    answer: "Yes, perfect for coffee shops (e.g., Buy 9 Get the 10th Free).",
  },
  {
    category: "loyalty",
    question: "Can I send bulk SMS/Email to my customers?",
    answer:
      "Yes, you can filter customers (e.g., 'Inactive for 30 days') and send a 'We Miss You' campaign.",
  },
  {
    category: "loyalty",
    question: "Is customer data kept private?",
    answer:
      "Yes, your customer data is for your use only and is never shared across different Vexel accounts.",
  },
  {
    category: "loyalty",
    question: "Can I manage 'Store Gift Cards'?",
    answer:
      "Yes, you can sell and track both physical and digital gift cards that can be used as payment.",
  },
  {
    category: "loyalty",
    question: "Do loyalty points expire?",
    answer:
      "You can set an optional expiry period (e.g., points expire after 12 months of inactivity).",
  },
  {
    category: "loyalty",
    question: "Can I offer 'Double Points' days?",
    answer:
      "Yes, you can schedule promotions that award extra points during specific hours or days.",
  },
  {
    category: "loyalty",
    question: "Can customers check their points balance online?",
    answer:
      "Yes, they can scan a link on their receipt or log into your optional 'Customer Portal'.",
  },
  {
    category: "loyalty",
    question: "Can I track referrals?",
    answer:
      "Our system can log which customer referred a new member and award 'Thank You' points to both.",
  },
  {
    category: "loyalty",
    question: "Does the system support 'Capped' loyalty?",
    answer:
      "Yes, you can set a maximum number of points a customer can earn per day or per transaction.",
  },
  {
    category: "loyalty",
    question: "How do I handle merged accounts?",
    answer:
      "If a customer has two profiles, you can use the 'Merge Customers' tool to combine their points and history.",
  },
  {
    category: "loyalty",
    question: "Can I export my customer list for social media ads?",
    answer:
      "Yes, you can export your list to create 'Lookalike Audiences' on Facebook and Instagram.",
  },

  // --- PAYMENT METHODS (20) ---
  {
    category: "payments",
    question: "Which payment methods does Vexel support?",
    answer:
      "We support Cash, Credit/Debit Cards, Mobile Wallets (LankaQR, etc.), Gift Cards, Store Credit, and Cheques.",
  },
  {
    category: "payments",
    question: "Does Vexel integrate with bank card terminals?",
    answer:
      "Yes, we integrate with several leading banks to automatically push the total to the card machine.",
  },
  {
    category: "payments",
    question: "Can I accept LankaQR payments?",
    answer:
      "Yes, Vexel can generate a dynamic QR code on the screen or receipt for customers to scan and pay.",
  },
  {
    category: "payments",
    question: "How long does it take to settle funds?",
    answer:
      "Card settlements are handled by your acquiring bank, typically within 24-48 business hours.",
  },
  {
    category: "payments",
    question: "Can I process split payments?",
    answer:
      "Yes, a single transaction can be paid using multiple methods (e.g., Half Cash, Half Card).",
  },
  {
    category: "payments",
    question: "Does Vexel support contactless (NFC) payments?",
    answer:
      "Yes, our integrated terminals support Apple Pay, Google Pay, and contactless cards.",
  },
  {
    category: "payments",
    question: "Can I set up 'Buy Now, Pay Later' (BNPL)?",
    answer:
      "Yes, Vexel integrates with major BNPL providers to offer installment plans to your customers.",
  },
  {
    category: "payments",
    question: "How do I handle currency exchange?",
    answer:
      "If you accept multiple currencies, Vexel can calculate the total based on your daily manually-set exchange rate.",
  },
  {
    category: "payments",
    question: "Can I charge a 'Card Surcharge'?",
    answer:
      "Yes, you can set an optional percentage-based fee that is automatically added for card payments.",
  },
  {
    category: "payments",
    question: "Is there a limit on the transaction amount?",
    answer:
      "Vexel does not set limits, but your payment processor or bank might have daily or per-transaction caps.",
  },
  {
    category: "payments",
    question: "How do I refund a card payment?",
    answer:
      "Refunds can be processed directly through the POS, which will then send the request to the integrated card terminal.",
  },
  {
    category: "payments",
    question: "Can I take 'On Account' or 'Credit' sales?",
    answer:
      "Yes, you can sell to authorized customers 'on account' and track their outstanding balance for later payment.",
  },
  {
    category: "payments",
    question: "Does Vexel support tip prompts on the terminal?",
    answer:
      "Yes, you can enable tip suggestions (e.g., 10%, 15%, 20%) during the checkout process.",
  },
  {
    category: "payments",
    question: "What is 'Offline Payment' mode?",
    answer:
      "It allows you to record a payment as 'Success' even if the card terminal is down, for manual reconciliation later.",
  },
  {
    category: "payments",
    question: "Can I integrate a custom payment gateway?",
    answer:
      "Yes, using our API, developers can link any localized or specialized payment terminal to Vexel.",
  },
  {
    category: "payments",
    question: "Does the system calculate 'Change Due' for cash?",
    answer:
      "Yes, the POS instantly calculates the exact change to be returned to the customer.",
  },
  {
    category: "payments",
    question: "Can I disable specific payment methods for certain products?",
    answer:
      "Currently, payment methods are global, but we can implement custom rules for Enterprise clients.",
  },
  {
    category: "payments",
    question: "How do I reconcile my daily card sales?",
    answer:
      "Our 'End of Day' report provides a summary of all card transactions to match against your bank's portal.",
  },
  {
    category: "payments",
    question: "Can I accept payments in installments?",
    answer:
      "Yes, you can record partial payments for an order and track the remaining balance.",
  },
  {
    category: "payments",
    question: "Is there an 'Express Checkout' mode?",
    answer:
      "Yes, for fast-moving environments, you can enable 'One-Tap Cash' for the most common denominations.",
  },

  // --- MULTI-STORE SYNC (20) ---
  {
    category: "multi-store",
    question: "Can I see sales for all my stores in one place?",
    answer:
      "Yes, the 'Global Dashboard' aggregates data from all locations into a single, real-time view.",
  },
  {
    category: "multi-store",
    question: "How do I transfer stock between stores?",
    answer:
      "Use the 'Stock Transfer' tool to create a manifest. Once the receiving branch 'Accepts' it, inventory levels update automatically.",
  },
  {
    category: "multi-store",
    question: "Can I have different prices for different locations?",
    answer:
      "Yes, you can set 'Location-based Pricing' for products if your costs or market demands vary by region.",
  },
  {
    category: "multi-store",
    question: "Are customer loyalty points shared across all stores?",
    answer:
      "Yes, a customer can earn points at Branch A and redeem them at Branch B seamlessly.",
  },
  {
    category: "multi-store",
    question: "Can I manage all my menus/products from one central office?",
    answer:
      "Absolutely. You can push menu updates to all locations or specific groups of stores instantly.",
  },
  {
    category: "multi-store",
    question: "What happens if one store's internet goes down?",
    answer:
      "That store will operate in 'Offline Mode' and sync its data once it's back online. Other stores are unaffected.",
  },
  {
    category: "multi-store",
    question: "Can I see 'Live Inventory' for other branches at the POS?",
    answer:
      "Yes, if a customer needs an item you're out of, you can instantly check if the nearby store has it.",
  },
  {
    category: "multi-store",
    question: "Can I restrict staff to only access their specific store?",
    answer:
      "Yes, users can be assigned to one, many, or all locations depending on their role.",
  },
  {
    category: "multi-store",
    question: "How do I compare performance between branches?",
    answer:
      "The 'Branch Comparison' report shows revenue, traffic, and profitability metrics side-by-side.",
  },
  {
    category: "multi-store",
    question: "Can I set different tax rules for different regions?",
    answer:
      "Yes, Vexel supports multiple tax profiles for businesses operating across different states or countries.",
  },
  {
    category: "multi-store",
    question: "Does Vexel support Frenchizing or Master Accounts?",
    answer:
      "Yes, we have specialized 'Multi-Entity' structures for franchise models with independent billing.",
  },
  {
    category: "multi-store",
    question: "Is there a limit to the number of stores?",
    answer:
      "No, our architecture is built to support businesses from 2 stores to 2,000+ stores.",
  },
  {
    category: "multi-store",
    question: "Can I sync data with my central ERP system?",
    answer:
      "Yes, we can bridge Vexel's multi-store data with enterprise ERPs like SAP, Oracle, or Microsoft Dynamics.",
  },
  {
    category: "multi-store",
    question: "How fast is the sync between stores?",
    answer:
      "Most data syncs within seconds. Large inventory updates may take up to a minute to propagate globally.",
  },
  {
    category: "multi-store",
    question: "Can I have different languages for different stores?",
    answer:
      "Yes, the POS interface can be localized per branch (e.g., English in city stores, Sinhala in rural areas).",
  },
  {
    category: "multi-store",
    question: "Does each store need its own server?",
    answer:
      "No, Vexel is cloud-native. You only need a stable internet connection at each site.",
  },
  {
    category: "multi-store",
    question: "Can I manage store-specific promotions?",
    answer:
      "Yes, you can create 'Location-specific Discounts' that are only valid at specific branches.",
  },
  {
    category: "multi-store",
    question: "How do I handle consolidated tax filing?",
    answer:
      "The 'Global Tax Report' compiles all your local taxes into a single master report for your accountants.",
  },
  {
    category: "multi-store",
    question: "Can I see who is currently logged in at each store?",
    answer:
      "Yes, the 'Live Attendance' dashboard shows the active staff members for every branch.",
  },
  {
    category: "multi-store",
    question: "What is 'Master Data Management' (MDM)?",
    answer:
      "It's our system for ensuring that product names, codes, and categories remain consistent across your entire organization.",
  },

  // --- DEVELOPER API (20) ---
  {
    category: "api",
    question: "Where can I find the API documentation?",
    answer:
      "Full documentation and testing sandboxes are available at developers..",
  },
  {
    category: "api",
    question: "What type of API does Vexel use?",
    answer:
      "We offer a modern RESTful API with JSON payloads and standard HTTP status codes.",
  },
  {
    category: "api",
    question: "How do I get an API key?",
    answer:
      "You can generate and manage your API keys under Settings > Developers > API Access.",
  },
  {
    category: "api",
    question: "Is there a rate limit for the API?",
    answer:
      "Yes, to ensure stability, we have tiered rate limits. Standard tiers get 10,000 calls per hour.",
  },
  {
    category: "api",
    question: "Can I use Webhooks to receive real-time data?",
    answer:
      "Yes, you can register Webhooks for events like 'New Sale', 'Inventory Update', or 'Customer Signup'.",
  },
  {
    category: "api",
    question: "Are there SDKs available for different languages?",
    answer:
      "We currently provide official SDKs for Node.js, Python, and PHP. More are coming soon.",
  },
  {
    category: "api",
    question: "Can I build my own custom POS using your API?",
    answer:
      "Yes, several clients use Vexel as a headless backend to power their custom checkout experiences.",
  },
  {
    category: "api",
    question: "Does the API support GraphQL?",
    answer:
      "We are currently in beta for our GraphQL endpoint. Contact support for early access.",
  },
  {
    category: "api",
    question: "How do I handle authentication?",
    answer:
      "We use Bearer Token (JWT) authentication for all API requests over secure HTTPS.",
  },
  {
    category: "api",
    question: "Can I access historical sales data through the API?",
    answer:
      "Yes, you can query transactions, reports, and audit logs within your authorized date ranges.",
  },
  {
    category: "api",
    question: "Are there Sandbox environments for testing?",
    answer:
      "Yes, you can create a 'Developer Account' which provides a full sandbox environment with dummy data.",
  },
  {
    category: "api",
    question: "Can I manage inventory through the API?",
    answer:
      "Yes, the API supports full CRUD (Create, Read, Update, Delete) operations for products and categories.",
  },
  {
    category: "api",
    question: "How do I report an API issue?",
    answer:
      "Please open an issue on our Developer Portal or email dev-support@vexelsystems.lk.",
  },
  {
    category: "api",
    question: "Is there an API to manage employee data?",
    answer:
      "Yes, with the proper 'Admin' scope, you can manage staff accounts and permissions programmatically.",
  },
  {
    category: "api",
    question: "Does the API support batch operations?",
    answer:
      "Yes, you can perform bulk updates for items like products and prices to reduce network overhead.",
  },
  {
    category: "api",
    question: "Can I pull raw reports via the API?",
    answer:
      "Yes, you can generate and download report data in JSON or CSV format.",
  },
  {
    category: "api",
    question: "What is the uptime of the API servers?",
    answer:
      "The API follows our standard 99.9% uptime SLA, hosted on highly redundant cloud architecture.",
  },
  {
    category: "api",
    question: "How do I handle API versioning?",
    answer:
      "We include the version in the URL (e.g., /v1/). We support older versions for 12 months after a major release.",
  },
  {
    category: "api",
    question: "Can I integrate a third-party BI tool like Tableau?",
    answer:
      "Yes, you can connect tools like Tableau, PowerBI, or Looker directly to our data warehouse endpoint.",
  },
  {
    category: "api",
    question: "Does the API allow for custom data fields?",
    answer:
      "Yes, you can use 'Metadata' objects to store custom fields for customers, sales, or products.",
  },

  // --- ONBOARDING & SETUP (20) ---
  {
    category: "onboarding",
    question: "How long does it take to set up Vexel?",
    answer:
      "A basic setup can be done in 30 minutes. Enterprise deployments with hardware and data migration typically take 1-2 weeks.",
  },
  {
    category: "onboarding",
    question: "What is the first thing I should do after signing up?",
    answer:
      "Complete the 'Setup Wizard' which will guide you through adding your business details, taxes, and first few products.",
  },
  {
    category: "onboarding",
    question: "Do you offer professional setup services?",
    answer:
      "Yes, we provide 'Assisted Onboarding' where a Vexel expert handles the entire configuration for you.",
  },
  {
    category: "onboarding",
    question: "How do I invite my team to the system?",
    answer:
      "Go to Settings > Staff and add their emails. They will receive an invitation link to set their own passwords.",
  },
  {
    category: "onboarding",
    question: "Where can I find the User Manual?",
    answer:
      "The 'Master Guide' is available as a searchable portal at help.vexelsystems.lk.",
  },
  {
    category: "onboarding",
    question: "Is there a checklist for opening day?",
    answer:
      "Yes, we provide a 'Store Launch Checklist' in the onboarding section to ensure your hardware and settings are perfect.",
  },
  {
    category: "onboarding",
    question: "Do you provide on-site training for my staff?",
    answer:
      "Yes, for local clients, we offer physical training sessions. Remote clients can book specialized Zoom training.",
  },
  {
    category: "onboarding",
    question: "How do I migrate from QuickBooks POS?",
    answer:
      "We have a specialized 'Migration Tool' that can import your QuickBooks inventory and customer lists directly.",
  },
  {
    category: "onboarding",
    question: "Can I start processing sales before finishing my inventory?",
    answer:
      "Yes, you can use 'Custom Sale' to enter an item name and price manually while you finish your product list.",
  },
  {
    category: "onboarding",
    question: "What hardware should I buy first?",
    answer:
      "At minimum, you need a Tablet/PC and a Receipt Printer. We recommend our 'Vexel Starter Bundle' for best value.",
  },
  {
    category: "onboarding",
    question: "How do I verify my business account?",
    answer:
      "Upload your business registration or ID in the 'Verification' tab under account settings.",
  },
  {
    category: "onboarding",
    question: "Can I set up Vexel on my own?",
    answer:
      "Yes! Our system is designed to be intuitive. Most users are up and running without any technical help.",
  },
  {
    category: "onboarding",
    question: "Is there a dedicated onboarding manager?",
    answer:
      "Enterprise and Premium plans include a dedicated manager to oversee your entire transition.",
  },
  {
    category: "onboarding",
    question: "What is a 'Vexel Academy'?",
    answer:
      "It's our online learning platform with free courses for owners and staff to become Vexel experts.",
  },
  {
    category: "onboarding",
    question: "How do I set up my tax rates?",
    answer:
      "Go to Settings > Taxes and add your local rates. You can apply them to all products or specific categories.",
  },
  {
    category: "onboarding",
    question: "Can I test the system before my store opens?",
    answer:
      "Yes, you can use 'Practice Mode' to ring up dummy sales and explore reports without affecting your real data.",
  },
  {
    category: "onboarding",
    question: "Do you offer webinars for new features?",
    answer:
      "Yes, we host weekly webinars for new users to learn best practices and tips.",
  },
  {
    category: "onboarding",
    question: "How do I link my bank account for payouts?",
    answer:
      "In the Billing section, enter your bank details securely for automatic settlements.",
  },
  {
    category: "onboarding",
    question: "Can I customize the receipt layout?",
    answer:
      "Yes, you can add your logo, address, and custom footers (like your Return Policy) in POS Settings > Receipts.",
  },
  {
    category: "onboarding",
    question: "What should I do if I feel overwhelmed?",
    answer:
      "Don't worry! Click the 'Guided Tour' button in the dashboard or message our 24/7 success team.",
  },
];
