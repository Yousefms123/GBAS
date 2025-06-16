tailwind.config = {
	theme: {
		extend: {
			colors: {
				"brand-orange": "#E85900",
				"brand-blue": "#003366",
				"brand-blue-light": "#004080",
				"brand-orange-light": "#FF6B1A",
			},
			fontFamily: {
				cairo: ["Cairo", "sans-serif"],
			},
			screens: {
				"sm-md": { min: "775px", max: "1080px" },
			},
		},
	},
};
const translations = {
	en: {
		"nav-about": "About Us",
		"nav-services": "Services",
		"nav-finderjet": "FinderJet",
		"nav-news": "News",
		"nav-contact": "Contact",
		"get-started": "Get Started",
		"hero-title":
			"Global Business and Aviation Services (GBAS) – Innovative Solutions for the Future of Aviation and Business",
		"hero-description":
			"At GBAS, we specialize in delivering integrated solutions that enhance efficiency and customer experience for airlines, airports, hotels, and other service facilities. From human resources management to advanced technology solutions like FinderJet, along with consulting and training services, we're here to support our partners in achieving excellence.",
		"hero-cta-text": "Let's build a partnership that takes your business to new heights!",
		"discover-services": "Discover Our Services",
		"contact-us": "Contact Us",
		"about-badge": "About GBAS",
		"about-title": "About GBAS",
		"about-description":
			"Established in 2024 in Fairfax, Virginia, Global Business and Aviation Services (GBAS) is dedicated to providing integrated solutions for airlines, airports, hotels, and other service facilities. Our team consists of ambitious young professionals and experts who blend a spirit of innovation with deep expertise to help our partners achieve excellence. We are committed to delivering services that enhance efficiency and customer experience, whether you manage an airport, an airline, a luxury hotel, or any other service facility.",
		"about-stat-1": "2024",
		"about-stat-1-label": "Established",
		"about-stat-2": "Virginia",
		"about-stat-2-label": "Headquarters",
		"vision-title": "Our Vision",
		"vision-text": "To be the global first choice for airlines, airports, hotels, and service industries.",
		"mission-title": "Our Mission",
		"mission-text":
			"To provide integrated and innovative solutions that drive progress in aviation and business.",
		"values-title": "Our Values",
		"value-1-title": "Professionalism:",
		"value-1-desc": " We are committed to the highest standards of quality in all we do.",
		"value-2-title": "Innovation:",
		"value-2-desc": " We invest in technology to develop advanced solutions.",
		"value-3-title": "Partnership:",
		"value-3-desc": " We build sustainable relationships with our partners.",
		"services-badge": "Our Services",
		"services-title": "Our Services",
		"service-hr-title": "Human Resources Management",
		"service-hr-desc":
			"At GBAS, we take pride in offering innovative and comprehensive staffing solutions tailored to meet the needs of airlines, airports, hotels, and various other service facilities. We focus on providing highly skilled and professionally trained teams to support your daily operations, significantly enhancing the quality of customer service delivered. We are committed to ensuring a seamless and efficient operational experience that exceeds our partners' expectations, whether they operate in the fast-paced environment of airports, airlines, luxury hotels, or other service sectors that demand precision and professionalism.",
		"service-tech-title": "Technology Solutions",
		"service-tech-desc":
			"We develop advanced technology products to improve operations for airlines, airports, hotels, and other service facilities. Our product FinderJet revolutionizes lost and found management with high efficiency, supporting airlines, airports, and hotels in delivering an exceptional customer experience, while also serving a broader market of service facilities. We're working on more innovative tech solutions to meet the needs of our partners across various industries.",
		"service-consulting-title": "Consulting and Training",
		"service-consulting-desc":
			"We design tailored training programs and provide specialized consulting to enhance the performance of airlines, airports, hotels, and other service sectors. Our expertise enables us to deliver practical and innovative solutions, including training staff at airlines, airports, and hotels on using our tech systems for maximum benefit.",
		"finderjet-badge": "Featured Product",
		"finderjet-title": "FinderJet",
		"finderjet-subtitle": "Revolutionary Lost and Found Management System for Airlines, Airports, and Hotels",
		"finderjet-main-title": "Transform Your Lost & Found Operations",
		"finderjet-description":
			"FinderJet is our flagship technology solution that revolutionizes how airlines, airports, and hotels manage lost and found items. With advanced tracking, automated notifications, and seamless integration capabilities, FinderJet significantly reduces processing time while enhancing customer satisfaction.",
		"finderjet-feature-1-title": "Instant Item Registration",
		"finderjet-feature-1-desc": "Quick and easy item logging with photo capture and detailed descriptions",
		"finderjet-feature-2-title": "Automated Notifications",
		"finderjet-feature-2-desc":
			"Smart matching system that automatically notifies customers when their items are found",
		"finderjet-feature-3-title": "Analytics Dashboard",
		"finderjet-feature-3-desc":
			"Comprehensive reporting and analytics to optimize your lost and found operations",
		"finderjet-demo": "Request Demo",
		"finderjet-brochure": "Download Brochure",
		"finderjet-stat-1": "Success Rate",
		"finderjet-stat-2": "Support",
		"finderjet-stat-3": "Integrations",
		"finderjet-stat-4": "Avg. Processing",
		"finderjet-airlines-title": "Airlines",
		"finderjet-airlines-desc":
			"Streamline cabin crew workflows and passenger item recovery across multiple flights and destinations",
		"finderjet-airports-title": "Airports",
		"finderjet-airports-desc":
			"Manage terminal-wide lost items with real-time tracking and automated passenger notifications",
		"finderjet-hotels-title": "Hotels",
		"finderjet-hotels-desc":
			"Enhance guest satisfaction with efficient room and facility lost item management systems",

		"news-badge": "Company News",
		"news-title": "Company News",
		"news-1-date": "April 2024",
		"news-1-title": "Launch of Global Business and Aviation Services (GBAS)",
		"news-1-excerpt":
			"We're excited to announce the launch of GBAS in 2024! We aim to deliver integrated solutions for airlines, airports, hotels, and other service facilities, focusing on enhancing operational efficiency and improving customer experience. Follow us for the latest updates!",
		"news-2-date": "April 2025",
		"news-2-title": "A Bright Future with New Tech Solutions",
		"news-2-excerpt":
			"We're currently developing a range of new technology products to support our partners in airlines, airports, hotels, and other service industries. Stay tuned for our upcoming launches that will boost operational efficiency!",
		"read-more": "Read More",
		"contact-badge": "Contact Us",
		"contact-title": "Be Our Partner in Success",
		"contact-description":
			"Looking for integrated solutions to improve your operations? Contact GBAS to discuss partnership opportunities, whether you're in airlines, airports, hotels, or other service industries.",
		"contact-info-title": "Contact Information",
		"email-label": "Email",
		"subject-label": "Subject",
		"address-label": "Address",
		"address-line-1": "11166 Fairfax Blvd, 500",
		"address-line-2": "Fairfax, VA 22030, USA",
		"linkedin-label": "Follow Us on LinkedIn",
		"linkedin-link": "LinkedIn Profile",
		"name-label": "Name",
		"company-label": "Company",
		"message-label": "Message",
		"message-placeholder": "Tell us about your needs...",
		"send-message": "Send Your Message",
		"footer-description":
			"Global Business and Aviation Services (GBAS) - Delivering integrated solutions for airlines, airports, hotels, and service facilities worldwide.",
		"footer-services": "Services",
		"footer-service-1": "HR Management",
		"footer-service-2": "Technology Solutions",
		"footer-service-3": "Consulting & Training",
		"footer-finderjet": "FinderJet",
		"footer-contact": "Contact",
		"footer-location": "Fairfax, Virginia, USA",
		"footer-copyright": "© 2024 Global Business and Aviation Services (GBAS). All rights reserved.",
		"footer-privacy": "Privacy Policy",
		"footer-terms": "Terms of Service",
	},
	ar: {
		"nav-about": "نبذة عنا",
		"nav-services": "خدماتنا",
		"nav-news": "الأخبار",
		"nav-contact": "اتصل بنا",
		"get-started": "ابدأ الآن",
		"hero-title": "Global Business and Aviation Services (GBAS) – حلول مبتكرة لمستقبل الطيران والأعمال",
		"hero-description":
			"في GBAS، نحن متخصصون في تقديم حلول متكاملة تعزز الكفاءة وتجربة العملاء لشركات الطيران، المطارات، والفنادق، إلى جانب المنشآت الخدمية الأخرى. من إدارة الموارد البشرية إلى حلول تقنية متطورة مثل FinderJet وخدمات الاستشارات والتدريب، نحن هنا لدعم شركائنا في تحقيق التميز.",
		"hero-cta-text": "دعونا نبني شراكة تطير بأعمالكم إلى آفاق جديدة!",
		"discover-services": "اكتشفوا خدماتنا",
		"contact-us": "تواصلوا معنا",
		"about-badge": "نبذة عن GBAS",
		"about-title": "نبذة عن GBAS",
		"about-description":
			"تأسست Global Business and Aviation Services (GBAS) في عام 2024 في فايرفاكس، فرجينيا، بهدف تقديم حلول متكاملة لشركات الطيران، المطارات، والفنادق، بالإضافة إلى المنشآت الخدمية الأخرى. فريقنا يضم مجموعة من الشباب الطموحين والخبراء الذين يجمعون بين روح الابتكار والخبرة العميقة لدعم شركائنا في تحقيق التميز. نحن ملتزمون بتقديم خدمات تعزز الكفاءة وتجربة العملاء، سواء كنت تدير مطارًا، شركة طيران، فندقًا فاخرًا، أو أي منشأة خدمية.",
		"about-stat-1": "2024",
		"about-stat-1-label": "تأسست",
		"about-stat-2": "فرجينيا",
		"about-stat-2-label": "المقر الرئيسي",
		"vision-title": "رؤيتنا",
		"vision-text": "أن نكون الخيار الأول لشركات الطيران، المطارات، والفنادق، والقطاعات الخدمية عالميًا.",
		"mission-title": "مهمتنا",
		"mission-text": "تقديم حلول متكاملة ومبتكرة تدفع عجلة الابتكار في الطيران والأعمال.",
		"values-title": "قيمنا",
		"value-1-title": "الاحترافية:",
		"value-1-desc": " نلتزم بأعلى معايير الجودة في كل ما نقدمه.",
		"value-2-title": "الابتكار:",
		"value-2-desc": " نستثمر في التكنولوجيا لتطوير حلول متطورة.",
		"value-3-title": "الشراكة:",
		"value-3-desc": " نبني علاقات مستدامة مع شركائنا.",
		"services-badge": "خدماتنا",
		"services-title": "خدماتنا",
		"service-hr-title": "إدارة الموارد البشرية",
		"service-hr-desc":
			"نحن في GBAS نفخر بتقديم حلول توظيف مبتكرة ومتكاملة مصممة خصيصًا لتلبية احتياجات شركات الطيران، المطارات، والفنادق، بالإضافة إلى المنشآت الخدمية المتنوعة. نعمل على توفير فرق عمل محترفة ومدربة تتمتع بالكفاءة العالية لدعم عملياتكم اليومية، مما يساهم في تحسين جودة الخدمات المقدمة للعملاء بشكل ملحوظ. نحن ملتزمون بضمان تجربة تشغيلية سلسة وفعالة تتجاوز توقعات شركائنا، سواء كانوا يعملون في بيئة المطارات المزدحمة، شركات الطيران، الفنادق الفاخرة، أو القطاعات الخدمية الأخرى التي تتطلب الدقة والاحترافية.",
		"service-tech-title": "الحلول التقنية",
		"service-tech-desc":
			"نطور منتجات تقنية متطورة لتحسين العمليات في شركات الطيران، المطارات، والفنادق، إلى جانب المنشآت الخدمية الأخرى. منتجنا FinderJet يُحدث ثورة في إدارة المفقودات بكفاءة عالية، مما يدعم شركات الطيران والمطارات والفنادق في تقديم تجربة عملاء استثنائية، ويخدم سوقًا أوسع من المنشآت الخدمية. لدينا المزيد من الحلول التقنية المبتكرة قيد التطوير لتلبية احتياجات شركائنا في مختلف القطاعات.",
		"service-consulting-title": "الاستشارات والتدريب",
		"service-consulting-desc":
			"نصمم برامج تدريبية مخصصة ونقدم استشارات متخصصة لتعزيز أداء شركات الطيران، المطارات، والفنادق، وكذلك القطاعات الخدمية الأخرى. خبرتنا تمكننا من تقديم حلول عملية ومبتكرة، بما في ذلك تدريب الموظفين في شركات الطيران، المطارات، والفنادق على استخدام أنظمتنا التقنية لتحقيق أقصى استفادة.",
		"finderjet-badge": "المنتج المميز",
		"finderjet-title": "فايندر جيت",
		"finderjet-subtitle": "نظام ثوري لإدارة المفقودات لشركات الطيران والمطارات والفنادق",
		"finderjet-main-title": "حوّل عمليات المفقودات لديك",
		"finderjet-description":
			"فايندر جيت هو حلنا التقني الرائد الذي يُحدث ثورة في كيفية إدارة شركات الطيران والمطارات والفنادق للأشياء المفقودة. مع التتبع المتقدم والإشعارات التلقائية وقدرات التكامل السلسة، يقلل فايندر جيت بشكل كبير من وقت المعالجة مع تعزيز رضا العملاء.",
		"finderjet-feature-1-title": "تسجيل فوري للأشياء",
		"finderjet-feature-1-desc": "تسجيل سريع وسهل للأشياء مع التقاط الصور والأوصاف التفصيلية",
		"finderjet-feature-2-title": "إشعارات تلقائية",
		"finderjet-feature-2-desc": "نظام مطابقة ذكي يُشعر العملاء تلقائيًا عند العثور على أشيائهم",
		"finderjet-feature-3-title": "لوحة تحليلات",
		"finderjet-feature-3-desc": "تقارير وتحليلات شاملة لتحسين عمليات المفقودات لديك",
		"finderjet-demo": "طلب عرض توضيحي",
		"finderjet-brochure": "تحميل الكتيب",
		"finderjet-stat-1": "معدل النجاح",
		"finderjet-stat-2": "الدعم",
		"finderjet-stat-3": "التكاملات",
		"finderjet-stat-4": "متوسط المعالجة",
		"finderjet-airlines-title": "شركات الطيران",
		"finderjet-airlines-desc": "تبسيط سير عمل طاقم الطائرة واستعادة أشياء الركاب عبر رحلات ووجهات متعددة",
		"finderjet-airports-title": "المطارات",
		"finderjet-airports-desc":
			"إدارة الأشياء المفقودة على مستوى المحطة مع التتبع في الوقت الفعلي والإشعارات التلقائية للركاب",
		"finderjet-hotels-title": "الفنادق",
		"finderjet-hotels-desc": "تعزيز رضا النزلاء مع أنظمة إدارة فعالة للأشياء المفقودة في الغرف والمرافق",

		"news-badge": "أخبار الشركة",
		"news-title": "أخبار الشركة",
		"news-1-date": "أبريل 2024",
		"news-1-title": "إطلاق Global Business and Aviation Services (GBAS)",
		"news-1-excerpt":
			"نحن متحمسون لإعلان إطلاق GBAS في عام 2024! نهدف إلى تقديم حلول متكاملة لشركات الطيران، المطارات، والفنادق، بالإضافة إلى المنشآت الخدمية الأخرى، مع التركيز على تعزيز الكفاءة وتحسين تجربة العملاء. تابعونا للحصول على آخر التحديثات!",
		"news-2-date": "أبريل 2025",
		"news-2-title": "مستقبل مشرق مع حلول تقنية جديدة",
		"news-2-excerpt":
			"نعمل حاليًا على تطوير مجموعة من المنتجات التقنية الجديدة التي ستدعم شركائنا في شركات الطيران، المطارات، والفنادق، وكذلك القطاعات الخدمية الأخرى. ترقبوا إطلاقاتنا القادمة التي ستعزز الكفاءة التشغيلية!",
		"read-more": "اقرأ المزيد",
		"contact-badge": "اتصل بنا",
		"contact-title": "كونوا شركاء نجاحنا",
		"contact-description":
			"هل تبحثون عن حلول متكاملة لتحسين عملياتكم؟ تواصلوا مع GBAS لمناقشة فرص التعاون، سواء كنتم في شركات الطيران، المطارات، الفنادق، أو الأعمال الخدمية الأخرى.",
		"contact-info-title": "معلومات الاتصال",
		"email-label": "البريد الإلكتروني",
		"subject-label": "الموضوع",
		"address-label": "العنوان",
		"address-line-1": "11166 Fairfax Blvd, 500",
		"address-line-2": "Fairfax, VA 22030, USA",
		"linkedin-label": "تابعونا على LinkedIn",
		"linkedin-link": "الملف الشخصي على LinkedIn",
		"name-label": "الاسم",
		"company-label": "الشركة",
		"message-label": "الرسالة",
		"message-placeholder": "أخبرونا عن احتياجاتكم...",
		"send-message": "أرسل رسالتك",
		"footer-description":
			"Global Business and Aviation Services (GBAS) - تقديم حلول متكاملة لشركات الطيران، المطارات، والفنادق، والمنشآت الخدمية حول العالم.",
		"footer-services": "الخدمات",
		"footer-service-1": "إدارة الموارد البشرية",
		"footer-service-2": "الحلول التقنية",
		"footer-service-3": "الاستشارات والتدريب",
		"footer-finderjet": "فايندر جيت",
		"footer-contact": "اتصل بنا",
		"footer-location": "فايرفاكس، فرجينيا، الولايات المتحدة",
		"footer-copyright": "© 2024 Global Business and Aviation Services (GBAS). جميع الحقوق محفوظة.",
		"footer-privacy": "سياسة الخصوصية",
		"footer-terms": "شروط الخدمة",
	},
	es: {
		"nav-about": "Acerca de",
		"nav-services": "Servicios",
		"nav-news": "Noticias",
		"nav-contact": "Contacto",
		"get-started": "Comenzar",
		"hero-title":
			"Global Business and Aviation Services (GBAS) – Soluciones Innovadoras para el Futuro de la Aviación y los Negocios",
		"hero-description":
			"En GBAS, nos especializamos en ofrecer soluciones integrales que mejoran la eficiencia y la experiencia del cliente para aerolíneas, aeropuertos, hoteles y otras instalaciones de servicio. Desde la gestión de recursos humanos hasta soluciones tecnológicas avanzadas como FinderJet, junto con servicios de consultoría y capacitación, estamos aquí para apoyar a nuestros socios en alcanzar la excelencia.",
		"hero-cta-text": "¡Construyamos una asociación que eleve tu negocio a nuevas alturas!",
		"discover-services": "Descubre Nuestros Servicios",
		"contact-us": "Contáctanos",
		"about-badge": "Acerca de GBAS",
		"about-title": "Acerca de GBAS",
		"about-description":
			"Fundada en 2024 en Fairfax, Virginia, Global Business and Aviation Services (GBAS) se dedica a proporcionar soluciones integrales para aerolíneas, aeropuertos, hoteles y otras instalaciones de servicio. Nuestro equipo está compuesto por jóvenes profesionales ambiciosos y expertos que combinan un espíritu innovador con una profunda experiencia para ayudar a nuestros socios a alcanzar la excelencia. Estamos comprometidos a ofrecer servicios que mejoren la eficiencia y la experiencia del cliente, ya sea que gestiones un aeropuerto, una aerolínea, un hotel de lujo u otra instalación de servicio.",
		"about-stat-1": "2024",
		"about-stat-1-label": "Fundada",
		"about-stat-2": "Virginia",
		"about-stat-2-label": "Sede Central",
		"vision-title": "Nuestra Visión",
		"vision-text":
			"Ser la primera opción global para aerolíneas, aeropuertos, hoteles e industrias de servicio.",
		"mission-title": "Nuestra Misión",
		"mission-text":
			"Proporcionar soluciones integrales e innovadoras que impulsen el progreso en la aviación y los negocios.",
		"values-title": "Nuestros Valores",
		"value-1-title": "Profesionalismo:",
		"value-1-desc": " Nos comprometemos a los más altos estándares de calidad en todo lo que hacemos.",
		"value-2-title": "Innovación:",
		"value-2-desc": " Invertimos en tecnología para desarrollar soluciones avanzadas.",
		"value-3-title": "Asociación:",
		"value-3-desc": " Construimos relaciones sostenibles con nuestros socios.",
		"services-badge": "Nuestros Servicios",
		"services-title": "Nuestros Servicios",
		"service-hr-title": "Gestión de Recursos Humanos",
		"service-hr-desc":
			"En GBAS, nos enorgullecemos de ofrecer soluciones innovadoras y completas de contratación diseñadas específicamente para satisfacer las necesidades de aerolíneas, aeropuertos, hoteles y diversas instalaciones de servicio. Nos enfocamos en proporcionar equipos altamente capacitados y profesionalmente entrenados para apoyar tus operaciones diarias, mejorando significativamente la calidad del servicio al cliente. Estamos comprometidos a garantizar una experiencia operativa fluida y eficiente que supere las expectativas de nuestros socios, ya sea que operen en el ajetreado entorno de los aeropuertos, aerolíneas, hoteles de lujo u otros sectores de servicio que exijan precisión y profesionalismo.",
		"service-tech-title": "Soluciones Tecnológicas",
		"service-tech-desc":
			"Desarrollamos productos tecnológicos avanzados para mejorar las operaciones de aerolíneas, aeropuertos, hoteles y otras instalaciones de servicio. Nuestro producto FinderJet revoluciona la gestión de objetos perdidos con alta eficiencia, apoyando a aerolíneas, aeropuertos y hoteles en ofrecer una experiencia excepcional al cliente, mientras también sirve a un mercado más amplio de instalaciones de servicio. Estamos trabajando en más soluciones tecnológicas innovadoras para satisfacer las necesidades de nuestros socios en diversas industrias.",
		"service-consulting-title": "Consultoría y Capacitación",
		"service-consulting-desc":
			"Diseñamos programas de capacitación personalizados y ofrecemos consultoría especializada para mejorar el rendimiento de aerolíneas, aeropuertos, hoteles y otros sectores de servicio. Nuestra experiencia nos permite entregar soluciones prácticas e innovadoras, incluyendo la capacitación del personal de aerolíneas, aeropuertos y hoteles en el uso de nuestros sistemas tecnológicos para obtener el máximo beneficio.",
		"finderjet-badge": "Producto Destacado",
		"finderjet-title": "FinderJet",
		"finderjet-subtitle":
			"Sistema Revolucionario de Gestión de Objetos Perdidos para Aerolíneas, Aeropuertos y Hoteles",
		"finderjet-main-title": "Transforma tus Operaciones de Objetos Perdidos",
		"finderjet-description":
			"FinderJet es nuestra solución tecnológica insignia que revoluciona cómo las aerolíneas, aeropuertos y hoteles gestionan los objetos perdidos. Con seguimiento avanzado, notificaciones automatizadas y capacidades de integración perfecta, FinderJet reduce significativamente el tiempo de procesamiento mientras mejora la satisfacción del cliente.",
		"finderjet-feature-1-title": "Registro Instantáneo de Objetos",
		"finderjet-feature-1-desc":
			"Registro rápido y fácil de objetos con captura de fotos y descripciones detalladas",
		"finderjet-feature-2-title": "Notificaciones Automatizadas",
		"finderjet-feature-2-desc":
			"Sistema de coincidencia inteligente que notifica automáticamente a los clientes cuando se encuentran sus objetos",
		"finderjet-feature-3-title": "Panel de Análisis",
		"finderjet-feature-3-desc":
			"Informes y análisis completos para optimizar tus operaciones de objetos perdidos",
		"finderjet-demo": "Solicitar Demo",
		"finderjet-brochure": "Descargar Folleto",
		"finderjet-stat-1": "Tasa de Éxito",
		"finderjet-stat-2": "Soporte",
		"finderjet-stat-3": "Integraciones",
		"finderjet-stat-4": "Procesamiento Promedio",
		"finderjet-airlines-title": "Aerolíneas",
		"finderjet-airlines-desc":
			"Optimiza los flujos de trabajo de la tripulación de cabina y la recuperación de objetos de pasajeros en múltiples vuelos y destinos",
		"finderjet-airports-title": "Aeropuertos",
		"finderjet-airports-desc":
			"Gestiona objetos perdidos en toda la terminal con seguimiento en tiempo real y notificaciones automatizadas a pasajeros",
		"finderjet-hotels-title": "Hoteles",
		"finderjet-hotels-desc":
			"Mejora la satisfacción de los huéspedes con sistemas eficientes de gestión de objetos perdidos en habitaciones e instalaciones",

		"news-badge": "Noticias de la Empresa",
		"news-title": "Noticias de la Empresa",
		"news-1-date": "Abril 2024",
		"news-1-title": "Lanzamiento de Global Business and Aviation Services (GBAS)",
		"news-1-excerpt":
			"¡Estamos emocionados de anunciar el lanzamiento de GBAS en 2024! Nos proponemos ofrecer soluciones integrales para aerolíneas, aeropuertos, hoteles y otras instalaciones de servicio, enfocándonos en mejorar la eficiencia operativa y la experiencia del cliente. ¡Síguenos para obtener las últimas actualizaciones!",
		"news-2-date": "Abril 2025",
		"news-2-title": "Un Futuro Prometedor con Nuevas Soluciones Tecnológicas",
		"news-2-excerpt":
			"Actualmente estamos desarrollando una gama de nuevos productos tecnológicos para apoyar a nuestros socios en aerolíneas, aeropuertos, hoteles y otras industrias de servicio. ¡Mantente atento a nuestros próximos lanzamientos que impulsarán la eficiencia operativa!",
		"read-more": "Leer Más",
		"contact-badge": "Contáctanos",
		"contact-title": "Sé Nuestro Socio en el Éxito",
		"contact-description":
			"¿Buscas soluciones integrales para mejorar tus operaciones? Contácta a GBAS para discutir oportunidades de asociación, ya sea que estés en aerolíneas, aeropuertos, hoteles u otras industrias de servicio.",
		"contact-info-title": "Información de Contacto",
		"email-label": "Correo Electrónico",
		"subject-label": "Sujeto",
		"address-label": "Dirección",
		"address-line-1": "11166 Fairfax Blvd, 500",
		"address-line-2": "Fairfax, VA 22030, USA",
		"linkedin-label": "Síguenos en LinkedIn",
		"linkedin-link": "Perfil de LinkedIn",
		"name-label": "Nombre",
		"company-label": "Empresa",
		"message-label": "Mensaje",
		"message-placeholder": "Cuéntanos sobre tus necesidades...",
		"send-message": "Envía Tu Mensaje",
		"footer-description":
			"Global Business and Aviation Services (GBAS) - Ofreciendo soluciones integrales para aerolíneas, aeropuertos, hoteles e instalaciones de servicio en todo el mundo.",
		"footer-services": "Servicios",
		"footer-service-1": "Gestión de RR.HH.",
		"footer-service-2": "Soluciones Tecnológicas",
		"footer-service-3": "Consultoría y Capacitación",
		"footer-finderjet": "FinderJet",
		"footer-contact": "Contacto",
		"footer-location": "Fairfax, Virginia, USA",
		"footer-copyright": "© 2024 Global Business and Aviation Services (GBAS). Todos los derechos reservados.",
		"footer-privacy": "Política de Privacidad",
		"footer-terms": "Términos de Servicio",
	},
};

let currentLanguage = "en";

// Language switching function
function changeLanguage(lang) {
	currentLanguage = lang;

	// Update HTML attributes
	document.documentElement.lang = lang;
	document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

	// Update current language display
	const currentLangElement = document.getElementById("currentLang");
	const flagClass =
		lang === "en" ? "assets/USA flag.svg" : lang === "ar" ? "assets/KSA flag.svg" : "assets/SPAIN flag.svg";
	const langText = lang === "en" ? "EN" : lang === "ar" ? "AR" : "ES";

	currentLangElement.textContent = langText;
	currentLangElement.previousElementSibling.src = flagClass;

	// Update all translatable elements
	const elements = document.querySelectorAll("[data-translate]");
	elements.forEach((element) => {
		const key = element.getAttribute("data-translate");
		if (translations[lang] && translations[lang][key]) {
			element.textContent = translations[lang][key];
		}
	});

	// Hide language menu
	document.getElementById("languageMenu").classList.add("hidden");

	// Store language preference
	localStorage.setItem("preferred-language", lang);
}

// Load saved language preference
function loadLanguagePreference() {
	const savedLang = localStorage.getItem("preferred-language");
	if (savedLang && translations[savedLang]) {
		changeLanguage(savedLang);
	}
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
	loadLanguagePreference();

	// Language dropdown toggle
	document.getElementById("languageDropdown").addEventListener("click", function () {
		document.getElementById("languageMenu").classList.toggle("hidden");
	});

	// Mobile menu toggle
	document.getElementById("mobileMenuBtn").addEventListener("click", function () {
		document.getElementById("mobileMenu").classList.toggle("hidden");
	});

	// Floating contact button
	document.getElementById("floatingContact").addEventListener("click", function () {
		document.getElementById("contact").scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});

	// Close language menu when clicking outside
	document.addEventListener("click", function (event) {
		const languageDropdown = document.getElementById("languageDropdown");
		const languageMenu = document.getElementById("languageMenu");

		if (!languageDropdown.contains(event.target)) {
			languageMenu.classList.add("hidden");
		}
	});

	// Smooth scrolling for navigation links
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute("href"));
			if (target) {
				target.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});

				// Update active nav link
				document.querySelectorAll(".nav-link").forEach((link) => {
					link.classList.remove("active");
				});
				this.classList.add("active");
			}
		});
	});

	// Form submission
	document.querySelector("form").addEventListener("submit", function (e) {
		e.preventDefault();

		// Get form data
		const formData = new FormData(this);
		const data = Object.fromEntries(formData);

		// Show success message
		const messages = {
			en: "Thank you for your message! We'll get back to you within 24 hours.",
			ar: "شكراً لرسالتك! سنتواصل معك خلال 24 ساعة.",
			es: "¡Gracias por tu mensaje! Te responderemos en 24 horas.",
		};

		alert(messages[currentLanguage]);

		// Reset form
		this.reset();
	});

	// Image lazy loading optimization
	// const images = document.querySelectorAll('img[loading="lazy"]');
	// const imageObserver = new IntersectionObserver((entries, observer) => {
	// 	entries.forEach((entry) => {
	// 		if (entry.isIntersecting) {
	// 			const img = entry.target;
	// 			img.src = img.src;
	// 			img.classList.remove("image-placeholder");
	// 			observer.unobserve(img);
	// 		}
	// 	});
	// });

	// images.forEach((img) => {
	// 	imageObserver.observe(img);
	// });

	// Navbar scroll effect
	window.addEventListener("scroll", function () {
		const navbar = document.querySelector("nav");
		if (window.scrollY > 100) {
			navbar.classList.add("bg-white/98");
			navbar.classList.remove("bg-white/95");
		} else {
			navbar.classList.add("bg-white/95");
			navbar.classList.remove("bg-white/98");
		}
	});
});
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
	e.preventDefault();

	emailjs.sendForm("service_0i3gpcp", "template_zyzixnz", this).then(
		() => {
			alert("تم إرسال الرسالة بنجاح!");
			form.reset();
		},
		(error) => {
			alert("حدث خطأ، حاول مرة أخرى.");
			console.log(error);
		}
	);
});
