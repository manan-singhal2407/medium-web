const dummyPost = [
    {
        user_id: 7,
        user_name: 'EllaDavis',
        user_image: 'ella_davis.jpg',
        post_id: 3501,
        title: 'Exploring Ancient Mysteries: Unraveling the Enigma of Pyramids',
        text: `Pyramids stand as silent sentinels of ancient civilizations, captivating our imagination and inviting us to decode their enigmatic legacy. From the Giza Plateau to the jungles of Mesoamerica, these architectural marvels are portals to the past, revealing secrets that continue to intrigue and inspire.
    
        The Great Pyramid of Giza, an awe-inspiring feat of engineering and astronomy, aligns with uncanny precision to cardinal points and celestial bodies.
        
        Mayan pyramids, adorned with intricate carvings, served as astronomical observatories and centers of spiritual reverence.
        
        The pyramids of Sudan, lesser-known treasures, challenge our understanding of ancient interconnections and the spread of knowledge.
        
        Theories about pyramid construction range from the practical to the mystical, fueling debates and discussions that illuminate the ingenuity of human innovation.
        
        Join us on a journey through time, as we venture into the heart of ancient mysteries and unravel the secrets that pyramids whisper across millennia.`,
        image: 'ancient_pyramids.jpg',
        topics: 'pyramids,ancient civilizations,archaeology,mysteries',
        created_at: '2023-09-04T14:30:00Z',
        last_updated_at: '2023-09-04T16:20:00Z',
        likes_count: 212,
        comments_count: 32,
        views_count: 740,
        time_read: '9 min',
        is_user_following: true,
        is_user_liked: true,
        is_user_bookmark: false,
    },
    {
        user_id: 8,
        user_name: 'WilliamMiller',
        user_image: 'william_miller.jpg',
        post_id: 3601,
        title: 'The Art of Zen: Navigating the Path of Mindful Meditation',
        text: `Mindful meditation is a timeless practice that offers a refuge from the chaos of modern life, guiding us toward inner peace, clarity, and a deeper connection with ourselves. With each breath and moment of stillness, we embark on a journey of self-discovery and tranquility.
    
        Mindful breathing, the cornerstone of meditation, anchors us to the present moment, inviting a state of awareness and presence.
        
        Guided meditations lead us on inner voyages, from relaxing on a serene beach to exploring the cosmos, fostering a sense of calm and wonder.
        
        Loving-kindness meditation cultivates compassion, not only for ourselves but also for others, creating ripples of positivity that extend far beyond our own hearts.
        
        Mindful movement, such as yoga and tai chi, intertwines breath and motion, inviting us to flow like a river and find grace in each gesture.
        
        Join us on a journey of mindful meditation, as we traverse the landscapes of the mind, cultivate mindfulness, and embrace the serenity that lies within.`,
        image: 'mindful_meditation.jpg',
        topics: 'meditation,mindfulness,inner peace,self-discovery',
        created_at: '2023-09-05T11:40:00Z',
        last_updated_at: '2023-09-05T13:30:00Z',
        likes_count: 227,
        comments_count: 31,
        views_count: 702,
        time_read: '8 min',
        is_user_following: false,
        is_user_liked: false,
        is_user_bookmark: true,
    },
    {
        user_id: 9,
        user_name: 'JamesWilson',
        user_image: 'james_wilson.jpg',
        post_id: 3701,
        title: 'The Majesty of Waterfalls: Nature\'s Spectacular Cascades',
        text: `Waterfalls embody the raw power and beauty of nature, cascading from great heights with a mesmerizing force that evokes wonder and awe. From the thunderous roar of Niagara Falls to the delicate veils of Angel Falls, these natural wonders captivate our senses and inspire reverence.
    
        Victoria Falls, known as the "Smoke that Thunders," creates a breathtaking curtain of mist and rainbows that stretches across the horizon.
        
        Iguazu Falls, a UNESCO World Heritage Site, merges the lushness of the Amazon Rainforest with the drama of cascading waters, creating an immersive sensory experience.
        
        Plitvice Lakes National Park boasts a series of terraced lakes and waterfalls that weave through limestone canyons, forming a living tapestry of water and rock.
        
        The journey to remote waterfalls, hidden deep within pristine wilderness, often involves hiking through untouched landscapes, adding an element of adventure to the experience.
        
        Join us as we chase the allure of waterfalls, marvel at their grandeur, and celebrate the harmonious dance between water and gravity that shapes our planet's landscapes.`,
        image: 'majestic_waterfalls.jpg',
        topics: 'waterfalls,nature,scenery,adventure',
        created_at: '2023-09-06T14:25:00Z',
        last_updated_at: '2023-09-06T16:15:00Z',
        likes_count: 208,
        comments_count: 29,
        views_count: 714,
        time_read: '8 min',
        is_user_following: true,
        is_user_liked: true,
        is_user_bookmark: false,
    },
    {
        user_id: 10,
        user_name: 'BenjaminJones',
        user_image: 'benjamin_jones.jpg',
        post_id: 3801,
        title: 'The Language of Symbols: Decoding Ancient Hieroglyphs',
        text: `Ancient hieroglyphs are a testament to humanity's drive to communicate and immortalize stories, beliefs, and knowledge. These intricate symbols, carved into stone and papyrus, hold keys to unlocking the mysteries of bygone civilizations and shedding light on their cultures and traditions.
    
        Egyptian hieroglyphs, with their iconic images and phonetic sounds, offer a glimpse into the daily life, religion, and architecture of the pharaohs.
        
        Mayan hieroglyphs, a complex system of glyphs and logograms, illuminate the dynasties, politics, and cosmology of the ancient Maya civilization.
        
        Linear B, an early form of Greek script, preserves administrative records and glimpses of Mycenaean society, shedding light on their economy and culture.
        
        The decipherment of hieroglyphs, such as the Rosetta Stone, unlocked a treasure trove of knowledge, enabling us to bridge the gap between the ancient and modern worlds.
        
        Join us on a journey of linguistic exploration, as we unravel the language of symbols and pay homage to the ancient civilizations that spoke to us through the written word.`,
        image: 'ancient_hieroglyphs.jpg',
        topics: 'hieroglyphs,ancient languages,culture,communication',
        created_at: '2023-09-07T11:10:00Z',
        last_updated_at: '2023-09-07T13:00:00Z',
        likes_count: 214,
        comments_count: 28,
        views_count: 698,
        time_read: '7 min',
        is_user_following: false,
        is_user_liked: false,
        is_user_bookmark: true,
    },
    {
        user_id: 11,
        user_name: 'VictoriaLee',
        user_image: 'victoria_lee.jpg',
        post_id: 3901,
        title: 'Cinema Through Time: A Journey Across Film Genres',
        text: `Cinema is a portal to different worlds, eras, and emotions, inviting us to immerse ourselves in the stories of characters and cultures. From the golden age of Hollywood to the rise of international cinema, film genres offer a kaleidoscope of experiences that entertain, educate, and inspire.
    
        Film noir, with its shadowy visuals and morally complex characters, captures the intrigue and suspense of a world shrouded in darkness.
        
        Romantic comedies celebrate the joy and challenges of love, reminding us that laughter and human connection transcend cultural boundaries.
        
        Sci-fi films transport us to futuristic landscapes and explore the boundless possibilities of technology, imagination, and human evolution.
        
        Period dramas resurrect historical events and figures, allowing us to witness pivotal moments and cultures through the lens of storytelling.
        
        Join us on a cinematic odyssey, where we traverse the vast expanse of film genres, celebrating the creativity, diversity, and magic of the silver screen.`,
        image: 'cinema_through_time.jpg',
        topics: 'cinema,film genres,movies,entertainment',
        created_at: '2023-09-08T14:20:00Z',
        last_updated_at: '2023-09-08T16:10:00Z',
        likes_count: 205,
        comments_count: 30,
        views_count: 725,
        time_read: '9 min',
        is_user_following: true,
        is_user_liked: true,
        is_user_bookmark: false,
    },
    {
        user_id: 12,
        user_name: 'HenryWalker',
        user_image: 'henry_walker.jpg',
        post_id: 4001,
        title: 'The Unseen World of Microorganisms: A Journey into Microscopy',
        text: `Microscopy unveils a hidden universe teeming with life, where microorganisms like bacteria, algae, and fungi flourish in intricate diversity. Through the lens of powerful microscopes, we glimpse the remarkable structures and behaviors of these minuscule life forms that shape our ecosystems and health.
    
        Bacterial colonies, visible only under magnification, showcase the intricate beauty of microscopic communities that impact everything from digestion to environmental cycles.
        
        Algae, with their vibrant colors and intricate shapes, play essential roles in aquatic ecosystems and serve as sources of nourishment and oxygen.
        
        Fungi, often overlooked, demonstrate incredible adaptability and ecological importance, breaking down organic matter and forming symbiotic relationships.
        
        Microscopy also reveals the intricacies of cellular structures, organelles, and molecular processes, deepening our understanding of life's building blocks.
        
        Join us on a microscopic expedition, where we venture into a realm of hidden wonders, unveiling the unseen forces that shape life on Earth.`,
        image: 'microscopic_world.jpg',
        topics: 'microscopy,microorganisms,biology,science',
        created_at: '2023-09-09T11:15:00Z',
        last_updated_at: '2023-09-09T13:05:00Z',
        likes_count: 199,
        comments_count: 27,
        views_count: 684,
        time_read: '8 min',
        is_user_following: false,
        is_user_liked: false,
        is_user_bookmark: true,
    },
    {
        user_id: 13,
        user_name: 'GraceThomas',
        user_image: 'grace_thomas.jpg',
        post_id: 4101,
        title: 'Sculpting with Light: The Art of Photography',
        text: `Photography is an art form that captures fleeting moments, emotions, and perspectives through the dance of light and shadow. From the click of the shutter to the final print, photographers weave narratives that freeze time and evoke feelings that transcend the visual realm.
    
        Portrait photography immortalizes the essence of individuals, conveying personalities, stories, and emotions in a single frame.
        
        Landscape photography paints landscapes with light, translating the grandeur of nature into images that inspire wanderlust and reverence.
        
        Street photography captures the raw energy of urban life, documenting candid moments that reflect the human experience.
        
        Macro photography delves into the intricate world of minuscule subjects, unveiling details that often escape the naked eye.
        
        Join us on a visual journey through the art of photography, where we explore the interplay of light and dark, moments and memories, and the power of a single image to tell a story.`,
        image: 'art_of_photography.jpg',
        topics: 'photography,art,light,creativity',
        created_at: '2023-09-10T14:30:00Z',
        last_updated_at: '2023-09-10T16:20:00Z',
        likes_count: 203,
        comments_count: 29,
        views_count: 711,
        time_read: '8 min',
        is_user_following: true,
        is_user_liked: true,
        is_user_bookmark: false,
    },
    {
        user_id: 14,
        user_name: 'ChloeWhite',
        user_image: 'chloe_white.jpg',
        post_id: 4201,
        title: 'The Melodies of Nature: Exploring Birdsong and Beyond',
        text: `Birdsong is nature's symphony, an intricate tapestry of melodies that fills the air with life and music. From the cheerful trill of the robin to the haunting call of the loon, avian vocalizations invite us to listen, learn, and connect with the diverse voices of the natural world.
    
        Birdsong serves as a form of communication, conveying messages of territory, courtship, and warnings to other birds.
        
        Mimicry, showcased by species like the superb lyrebird, demonstrates the astonishing ability of birds to imitate a wide range of sounds, from chainsaws to camera shutters.
        
        The study of birdsong provides insights into avian behavior, cognition, and even the neurobiology of learning and memory.
        
        Beyond birds, the sounds of nature—the rustling of leaves, the rush of water, and the whispers of wind—compose a symphony that nurtures our sense of wonder and connection.
        
        Join us as we embark on a sonic journey through the melodies of nature, celebrating the harmonious chorus that unites the animal and human realms.`,
        image: 'melodies_of_nature.jpg',
        topics: 'birdsong,nature,ornithology,soundscapes',
        created_at: '2023-09-11T11:40:00Z',
        last_updated_at: '2023-09-11T13:30:00Z',
        likes_count: 210,
        comments_count: 30,
        views_count: 725,
        time_read: '8 min',
        is_user_following: false,
        is_user_liked: false,
        is_user_bookmark: true,
    },
    {
        user_id: 15,
        user_name: 'EmmaJohnson',
        user_image: 'emma_johnson.jpg',
        post_id: 4301,
        title: 'The Art of Bonsai: Cultivating Miniature Trees',
        text: `Bonsai is a living art form that marries horticulture and aesthetics, inviting us to cultivate miniature trees that embody the spirit of nature in a compact form. With meticulous care and shaping, these living sculptures mirror the beauty of ancient trees while fitting gracefully into any space.
    
        Bonsai trees, carefully pruned and trained, evoke the grandeur and elegance of full-sized trees, encapsulating the essence of landscapes in miniature.
        
        Various styles, from formal upright to windswept, allow bonsai artists to express creativity and evoke different natural settings and conditions.
        
        Bonsai cultivation demands patience, as trees are shaped over years or decades, inspiring a sense of connection with the passage of time and the rhythms of nature.
        
        Beyond aesthetics, the art of bonsai embodies principles of balance, harmony, and the Japanese philosophy of wabi-sabi—a celebration of imperfection and transience.
        
        Join us on a journey into the world of bonsai, where we explore the delicate interplay between cultivation and artistry, nature and human hands.`,
        image: 'art_of_bonsai.jpg',
        topics: 'bonsai,horticulture,artistry,nature',
        created_at: '2023-09-12T14:25:00Z',
        last_updated_at: '2023-09-12T16:15:00Z',
        likes_count: 214,
        comments_count: 31,
        views_count: 741,
        time_read: '9 min',
        is_user_following: true,
        is_user_liked: true,
        is_user_bookmark: false,
    },
    {
        user_id: 16,
        user_name: 'NoahMiller',
        user_image: 'noah_miller.jpg',
        post_id: 4401,
        title: 'Exploring Underwater Worlds: Diving into Ocean Biodiversity',
        text: `The oceans are a realm of wonder and discovery, teeming with an astonishing array of marine life that populates coral reefs, deep-sea trenches, and coastal ecosystems. Through scuba diving and underwater exploration, we immerse ourselves in an environment that holds the key to understanding our planet's intricate web of life.
    
        Coral reefs, often referred to as the rainforests of the sea, shelter an abundance of marine species, from vibrant corals to elusive seahorses.
        
        Deep-sea exploration unveils bizarre and otherworldly creatures adapted to the extreme conditions of cold, darkness, and high pressure.
        
        Coastal ecosystems, where land meets sea, provide vital habitats for a diverse array of species, including birds, marine mammals, and mangrove trees.
        
        Conservation efforts and marine protected areas safeguard fragile ecosystems and work toward ensuring the survival of marine biodiversity for future generations.
        
        Join us as we plunge into the depths, exploring underwater worlds that hold the secrets to the evolution, interconnectedness, and resilience of life on Earth.`,
        image: 'underwater_exploration.jpg',
        topics: 'underwater exploration,ocean biodiversity,marine life,conservation',
        created_at: '2023-09-13T11:10:00Z',
        last_updated_at: '2023-09-13T13:00:00Z',
        likes_count: 210,
        comments_count: 28,
        views_count: 712,
        time_read: '8 min',
        is_user_following: false,
        is_user_liked: false,
        is_user_bookmark: true,
    },
    {
        user_id: 17,
        user_name: 'SophiaBrown',
        user_image: 'sophia_brown.jpg',
        post_id: 4501,
        title: 'The Dance of Seasons: Capturing Nature\'s Transformations',
        text: `The changing of seasons is a choreography of nature, a rhythmic dance that paints the landscape with a symphony of colors and sensations. From the blooming of spring flowers to the golden hues of autumn leaves, the cycle of seasons reminds us of the Earth's eternal renewal and the passage of time.
    
        Spring bursts forth with vibrant blooms and new life, signaling the awakening of flora and fauna from their winter slumber.
        
        Summer brings warmth and vitality, as nature thrives and landscapes come alive with the sounds of buzzing insects and rustling leaves.
        
        Autumn's embrace ushers in a spectacle of colors, as trees shed their leaves in a brilliant display of reds, yellows, and oranges.
        
        Winter's hush blankets the land in serenity, inviting moments of introspection and reflection amidst the stillness of snow-covered scenes.
        
        Join us on a journey through the dance of seasons, where we bear witness to nature's ever-changing tapestry and find solace in the harmonious rhythm of the Earth.`,
        image: 'dance_of_seasons.jpg',
        topics: 'seasons,nature,landscape,change',
        created_at: '2023-09-14T14:20:00Z',
        last_updated_at: '2023-09-14T16:10:00Z',
        likes_count: 203,
        comments_count: 29,
        views_count: 700,
        time_read: '7 min',
        is_user_following: true,
        is_user_liked: true,
        is_user_bookmark: false,
    },
    {
        user_id: 18,
        user_name: 'LiamJohnson',
        user_image: 'liam_johnson.jpg',
        post_id: 4601,
        title: 'The Legacy of Mythology: Gods, Heroes, and Ancient Tales',
        text: `Mythology is the tapestry of human imagination, interweaving gods, heroes, and supernatural beings into stories that reflect cultural beliefs and timeless truths. Across civilizations and epochs, mythology shapes our understanding of the world, offering insights into the human psyche and the forces that shape our existence.
    
        Greek mythology, with its pantheon of gods and epic narratives, explores the complexities of human nature, fate, and hubris.
        
        Norse mythology, set in the rugged landscapes of the North, speaks of honor, destiny, and the cyclical nature of life and death.
        
        Hindu mythology's intricate tales of gods, goddesses, and avatars convey spiritual wisdom and the eternal dance of creation and destruction.
        
        Indigenous mythologies offer deep connections to nature, ancestry, and the spirits that dwell within the natural world.
        
        Join us on a mythic journey, where we traverse the realms of gods and mortals, encountering tales that transcend time and ignite the fires of imagination.`,
        image: 'legacy_of_mythology.jpg',
        topics: 'mythology,culture,folklore,legends',
        created_at: '2023-09-15T11:15:00Z',
        last_updated_at: '2023-09-15T13:05:00Z',
        likes_count: 210,
        comments_count: 30,
        views_count: 716,
        time_read: '8 min',
        is_user_following: false,
        is_user_liked: false,
        is_user_bookmark: true,
    },
    {
        user_id: 19,
        user_name: 'AidenGarcia',
        user_image: 'aiden_garcia.jpg',
        post_id: 4701,
        title: 'The Craft of Woodworking: Shaping Artistry from Timber',
        text: `Woodworking is a testament to human ingenuity and craftsmanship, transforming raw timber into functional and artistic creations. From finely carved furniture to delicate sculptures, woodworking marries tradition and innovation, celebrating the versatility and beauty of wood as a medium.
    
        Fine furniture craftsmanship combines design, joinery, and finishing to create pieces that harmonize form and function, enriching living spaces with timeless elegance.
        
        Woodturning unveils the art of shaping wood on a lathe, crafting intricate bowls, vases, and even intricate wooden pens.
        
        Sculptural woodworking merges nature and creativity, as artists carve, sculpt, and manipulate wood to evoke emotions and narratives.
        
        The sustainable practices of woodworking emphasize responsible sourcing and eco-friendly techniques, honoring the resources of our planet.
        
        Join us on a journey into the world of woodworking, where we witness the transformation of timber into art, and delve into the passion and skill that define this age-old craft.`,
        image: 'craft_of_woodworking.jpg',
        topics: 'woodworking,craftsmanship,artistry,design',
        created_at: '2023-09-16T14:30:00Z',
        last_updated_at: '2023-09-16T16:20:00Z',
        likes_count: 215,
        comments_count: 32,
        views_count: 734,
        time_read: '9 min',
        is_user_following: true,
        is_user_liked: true,
        is_user_bookmark: false,
    },
    {
        user_id: 1,
        user_name: 'JaneSmith',
        user_image: 'jane_smith.jpg',
        post_id: 201,
        title: 'Exploring the Wonders of Nature',
        text: `Nature has always been a source of fascination for humankind. The vast landscapes, intricate ecosystems, and breathtaking beauty have captured our imagination for centuries. From the towering mountains to the serene beaches, from the lush forests to the arid deserts, every corner of our planet holds a unique charm.
  
      In this article, we embark on a journey to explore the wonders of nature. Let's start with the enchanting rainforests that are often referred to as the lungs of our planet. These lush jungles are teeming with life, from the smallest insects to the majestic elephants. The vibrant colors and diverse species found in rainforests make them a treasure trove of biodiversity.
      
      As we move to the expansive oceans, a whole new world opens up before us. Coral reefs, with their kaleidoscopic hues, house a myriad of marine creatures. The intricate relationship between coral polyps and fish creates a delicate balance that sustains the entire ecosystem. The deep, mysterious abyss of the ocean holds secrets we are only beginning to uncover.
      
      The towering mountains, with their snow-capped peaks, evoke a sense of awe and wonder. These giants not only shape the landscape but also influence weather patterns and provide a habitat for a range of species adapted to the harsh conditions. Scaling a mountain is not just a physical feat; it's a journey of self-discovery and perseverance.
      
      Moving to the plains and savannas, we witness the grace and power of the animal kingdom. The annual wildebeest migration in Africa is a testament to the cyclical rhythms of nature and the struggle for survival. The predator-prey dynamics remind us of the delicate balance that exists in these dynamic ecosystems.
      
      Let's not forget the deserts, where life has found ingenious ways to adapt to extreme conditions. From the Sahara to the Mojave, these arid landscapes are home to creatures that have evolved to thrive in scarcity. The shifting sand dunes and star-studded night skies create a surreal atmosphere.
      
      In conclusion, our planet is a masterpiece of natural artistry. The more we explore, the more we realize how interconnected all life forms are. Preserving these wonders is not just a responsibility; it's a testament to our respect and gratitude for the beauty and resources nature provides.`,
        image: 'nature_wonders.jpg',
        topics: 'nature,ecosystems,biodiversity,exploration',
        created_at: '2023-08-02T11:30:00Z',
        last_updated_at: '2023-08-02T14:15:00Z',
        likes_count: 128,
        comments_count: 23,
        views_count: 562,
        time_read: '9 min',
        is_user_following: true,
        is_user_liked: true,
        is_user_bookmark: false,
    },
    {
        user_id: 2,
        user_name: 'AlexJohnson',
        user_image: 'alex_johnson.jpg',
        post_id: 301,
        title: 'The Art of Culinary Fusion',
        text: `Culinary fusion is more than just a trend; it's a celebration of flavors, cultures, and creativity on a plate. The world of food has become a global playground where traditional recipes meet modern techniques, resulting in delightful gastronomic experiences that tantalize the taste buds.
    
        Imagine savoring a dish that seamlessly blends the spices of India with the ingredients of Italy. This harmonious marriage of diverse culinary traditions is a testament to the evolving nature of cuisine. Fusion cuisine doesn't just break culinary boundaries; it creates new ones that challenge our palates and expand our horizons.
        
        Take, for instance, the sushi burrito—a perfect marriage of Japanese sushi and Mexican burrito. The delicate art of rolling sushi meets the hearty, flavorful fillings of a burrito, creating a handheld masterpiece that defies convention.
        
        In the world of desserts, the cronut stands as a shining example of fusion brilliance. This delectable treat combines the flakiness of a croissant with the sweetness of a donut, resulting in a pastry that's as Instagrammable as it is delicious.
        
        The beauty of culinary fusion lies in its endless possibilities. Chefs around the world experiment with ingredients, techniques, and presentations, crafting dishes that tell a story of cultural exchange and innovation. It's not just about combining ingredients; it's about understanding the essence of each cuisine and reimagining it in a novel way.
        
        As we embark on culinary adventures that traverse continents, let's celebrate the art of fusion. Let's embrace the dishes that bridge cultures and bring people together around the universal language of food.`,
        image: 'culinary_fusion.jpg',
        topics: 'food,cuisine,fusion,flavors',
        created_at: '2023-08-03T15:45:00Z',
        last_updated_at: '2023-08-03T18:20:00Z',
        likes_count: 89,
        comments_count: 14,
        views_count: 421,
        time_read: '8 min',
        is_user_following: false,
        is_user_liked: false,
        is_user_bookmark: true,
    },
    {
        user_id: 3,
        user_name: 'EmilyBrown',
        user_image: 'emily_brown.jpg',
        post_id: 401,
        title: 'Unleashing Creativity Through Abstract Art',
        text: `Abstract art is a realm of boundless imagination, where colors, shapes, and textures come together to evoke emotions and challenge perceptions. The canvas becomes a playground for the artist's inner world, a space where the conventional gives way to the extraordinary.
    
        In the world of abstract art, the absence of a clear subject opens doors to interpretation. Each brushstroke is a brushstroke of freedom, inviting viewers to explore their own feelings and thoughts in response to the artwork. The vibrant splashes of color might symbolize a whirlwind of emotions, while the intersecting lines could represent the complexities of human relationships.
        
        Artists like Jackson Pollock and Wassily Kandinsky paved the way for abstract expressionism, where spontaneity and intuition take center stage. The act of creation becomes a dance between the artist's mind and the canvas, resulting in a visual symphony that resonates with the soul.
        
        The beauty of abstract art is its ability to communicate without words. It can convey the chaos of urban life, the serenity of nature, or the turbulence of inner struggles. As viewers, we are invited to embrace ambiguity and immerse ourselves in a world of endless possibilities.
        
        Whether through bold splatters or delicate brushwork, abstract art invites us to let go of preconceived notions and embrace the unknown. It's a reminder that art, like life, is a journey of exploration and self-discovery.`,
        image: 'abstract_art.jpg',
        topics: 'art,painting,creativity,expression',
        created_at: '2023-08-04T12:15:00Z',
        last_updated_at: '2023-08-04T14:50:00Z',
        likes_count: 156,
        comments_count: 32,
        views_count: 673,
        time_read: '7 min',
        is_user_following: true,
        is_user_liked: true,
        is_user_bookmark: false,
    },
    {
        user_id: 4,
        user_name: 'MichaelWilliams',
        user_image: 'michael_williams.jpg',
        post_id: 501,
        title: 'The Power of Mindfulness Meditation',
        text: `In the hustle and bustle of modern life, finding moments of tranquility and inner peace has become a precious gift. This is where mindfulness meditation emerges as a guiding light, offering a path to navigate the chaos and reconnect with our true selves.
    
        Mindfulness meditation is not about escaping reality; it's about embracing it fully. It invites us to be present in each moment, to observe our thoughts and emotions without judgment. As we sit in stillness, we learn to detach from the constant stream of distractions and find solace in the simplicity of breathing.
        
        The practice of mindfulness is rooted in ancient traditions, from Buddhism to Stoicism. It encourages us to cultivate self-awareness and compassion, not only towards ourselves but also towards others. Through mindfulness, we develop a deeper understanding of the interconnectedness of all living beings.
        
        Scientific research has revealed the profound impact of mindfulness on mental and physical well-being. From reducing stress and anxiety to improving focus and emotional regulation, the benefits of mindfulness meditation extend to every facet of our lives.
        
        As we embark on the journey of mindfulness, it's important to remember that it's not a destination but a lifelong practice. It's a gentle reminder to slow down, breathe, and savor the richness of each passing moment. In the midst of chaos, mindfulness becomes our sanctuary, a place of refuge we can access anytime, anywhere.`,
        image: 'mindfulness_meditation.jpg',
        topics: 'mindfulness,meditation,well-being,inner peace',
        created_at: '2023-08-05T09:30:00Z',
        last_updated_at: '2023-08-05T11:40:00Z',
        likes_count: 203,
        comments_count: 18,
        views_count: 721,
        time_read: '6 min',
        is_user_following: false,
        is_user_liked: false,
        is_user_bookmark: true,
    },
    {
        user_id: 5,
        user_name: 'SophiaDavis',
        user_image: 'sophia_davis.jpg',
        post_id: 601,
        title: 'The Marvels of Space Exploration',
        text: `The cosmos has always beckoned us with its mysteries and infinite possibilities. Space exploration, fueled by human curiosity and technological advancement, has taken us to the realms beyond our planet, unraveling cosmic wonders that leave us in awe.
    
        The journey of space exploration began with the launch of Sputnik 1, a modest satellite that marked the dawn of the Space Age. Since then, humanity has achieved incredible milestones, from landing on the Moon to sending rovers to Mars. Each mission expands our understanding of the universe and raises new questions about our place in it.
        
        The Hubble Space Telescope has gifted us with breathtaking images of distant galaxies, nebulae, and star clusters. These snapshots of cosmic artistry remind us of the vastness of space and the interconnectedness of all celestial bodies.
        
        Beyond our own solar system, exoplanet discoveries have ignited our imagination about the potential for life beyond Earth. The search for habitable worlds continues, as we scan the cosmos for signs of distant neighbors.
        
        The International Space Station (ISS) stands as a testament to international collaboration and human ingenuity. It serves as a microcosm of life in space, where astronauts conduct scientific experiments and gather insights that benefit life on Earth.
        
        As we gaze at the stars, we are reminded that the cosmos is a playground for discovery and exploration. It's a canvas of scientific inquiry and human achievement that beckons us to continue pushing the boundaries of our knowledge.`,
        image: 'space_exploration.jpg',
        topics: 'space,exploration,cosmos,astronomy',
        created_at: '2023-08-06T16:20:00Z',
        last_updated_at: '2023-08-06T18:10:00Z',
        likes_count: 289,
        comments_count: 42,
        views_count: 892,
        time_read: '10 min',
        is_user_following: true,
        is_user_liked: true,
        is_user_bookmark: false,
    },
    {
        user_id: 6,
        user_name: 'WilliamMiller',
        user_image: 'william_miller.jpg',
        post_id: 701,
        title: 'Evolving Trends in Fashion: A Historical Perspective',
        text: `Fashion is a living art form that reflects the spirit of an era. From the opulence of the Victorian era to the rebelliousness of the 20th century, fashion has been a mirror to society's cultural, social, and political shifts.
    
        The 1920s introduced the world to the flapper style, characterized by short hemlines, drop-waist dresses, and embellished headbands. This era of liberation and jazz music marked a departure from the corsets and constraints of previous decades.
        
        The 1960s witnessed the rise of counterculture fashion, with bell-bottoms, tie-dye, and psychedelic prints becoming symbols of youthful rebellion. The fashion of this era was a statement against the establishment and a celebration of individuality.
        
        Fast forward to the 21st century, and we see the fusion of technology and fashion, giving birth to smart clothing and sustainable design. Wearable tech, 3D printing, and upcycled fashion are reshaping the industry and challenging traditional notions of clothing.
        
        Social media platforms have democratized fashion, allowing individuals to showcase their unique styles and influence trends. The concept of "fast fashion" has emerged, offering affordable and quickly produced clothing, but raising concerns about its environmental impact.
        
        Through the lens of fashion, we glimpse the evolution of society's values and aspirations. From power suits to athleisure, fashion adapts to the changing needs and desires of the times while leaving an indelible mark on cultural history.`,
        image: 'fashion_trends.jpg',
        topics: 'fashion,history,trends,culture',
        created_at: '2023-08-07T10:10:00Z',
        last_updated_at: '2023-08-07T12:30:00Z',
        likes_count: 178,
        comments_count: 28,
        views_count: 630,
        time_read: '9 min',
        is_user_following: false,
        is_user_liked: false,
        is_user_bookmark: true,
    },
    {
        user_id: 7,
        user_name: 'OliviaWilson',
        user_image: 'olivia_wilson.jpg',
        post_id: 801,
        title: 'Rediscovering the Joy of Reading',
        text: `In a world brimming with screens and digital distractions, the timeless pleasure of reading often takes a backseat. However, the act of immersing oneself in a good book remains one of the most rewarding and intellectually enriching experiences.
    
        When we open a book, we step into a realm of imagination and knowledge. Whether it's a captivating novel, a thought-provoking essay, or a riveting biography, reading offers a portal to new perspectives and ideas.
        
        The tactile sensation of turning pages, the scent of ink on paper, and the serenity of a quiet reading nook create an atmosphere conducive to introspection and deep thinking.
        
        Reading fosters empathy as we inhabit the minds of characters from different walks of life. It sparks conversations, ignites creativity, and nurtures a lifelong love affair with learning.
        
        The resurgence of book clubs and online reading communities is a testament to the enduring allure of reading. Sharing literary discoveries and engaging in meaningful discussions connect us in a world that can often feel disconnected.
        
        Let's embrace the joy of reading—whether it's a well-worn classic or a modern bestseller—and let the written word continue to weave its magic in our lives.`,
        image: 'joy_of_reading.jpg',
        topics: 'reading,literature,books,culture',
        created_at: '2023-08-08T14:30:00Z',
        last_updated_at: '2023-08-08T16:20:00Z',
        likes_count: 134,
        comments_count: 19,
        views_count: 572,
        time_read: '7 min',
        is_user_following: true,
        is_user_liked: true,
        is_user_bookmark: false,
    },
    {
        user_id: 8,
        user_name: 'DanielMartinez',
        user_image: 'daniel_martinez.jpg',
        post_id: 901,
        title: 'Exploring Cultural Heritage Through Music',
        text: `Music is a universal language that transcends borders and connects us to our cultural roots. The melodies, rhythms, and instruments unique to each region tell stories of heritage, identity, and the human experience.
    
        From the soulful blues of the Mississippi Delta to the rhythmic beats of West African drums, music serves as a vessel for expressing emotions and preserving traditions.
        
        Traditional folk music, passed down through generations, offers a window into the daily lives and historical struggles of communities. Instruments like the bagpipes, sitar, and marimba carry the legacy of centuries.
        
        As cultures interact and blend, music becomes a bridge between worlds. Genres like jazz, which emerged from the fusion of African, European, and Latin influences, remind us of the power of artistic collaboration.
        
        Modern technology enables us to explore and appreciate music from around the globe. Streaming platforms bring international sounds to our ears, inviting us to embark on sonic journeys of discovery.
        
        As we tap our feet and sway to the rhythm, let's honor the cultural treasures embedded in the melodies. Let's celebrate the diverse tapestry of human expression woven by musicians across time and space.`,
        image: 'cultural_music.jpg',
        topics: 'music,culture,heritage,identity',
        created_at: '2023-08-09T09:45:00Z',
        last_updated_at: '2023-08-09T11:15:00Z',
        likes_count: 188,
        comments_count: 25,
        views_count: 633,
        time_read: '8 min',
        is_user_following: false,
        is_user_liked: false,
        is_user_bookmark: true,
    },
    {
        user_id: 9,
        user_name: 'EthanTaylor',
        user_image: 'ethan_taylor.jpg',
        post_id: 1001,
        title: 'Sustainable Living: Nurturing Our Planet',
        text: `The urgency of environmental conservation has propelled sustainable living to the forefront of global discourse. As stewards of the Earth, we are called upon to adopt practices that minimize our ecological footprint and ensure a healthier future for generations to come.
    
        Sustainable living encompasses a spectrum of choices, from reducing single-use plastics to embracing renewable energy sources. It's about making conscious decisions that strike a balance between our needs and the well-being of the planet.
        
        The zero-waste movement encourages us to rethink consumption patterns and prioritize reuse and recycling. Composting, upcycling, and reducing food waste are practical steps towards a more sustainable lifestyle.
        
        Embracing plant-based diets not only benefits our health but also reduces the strain on natural resources. By choosing local, organic produce, we support regenerative agriculture and reduce greenhouse gas emissions.
        
        Sustainable architecture and design promote energy efficiency and responsible use of materials. Green buildings and eco-friendly technologies pave the way for a more harmonious coexistence with nature.
        
        Each small change, whether it's opting for public transport or participating in community clean-ups, contributes to the collective effort of preserving our planet. Sustainable living is not a sacrifice; it's an investment in the future we all share.`,
        image: 'sustainable_living.jpg',
        topics: 'sustainability,environment,ecology,conservation',
        created_at: '2023-08-10T13:20:00Z',
        last_updated_at: '2023-08-10T15:05:00Z',
        likes_count: 215,
        comments_count: 31,
        views_count: 782,
        time_read: '9 min',
        is_user_following: true,
        is_user_liked: true,
        is_user_bookmark: false,
    },
    {
        user_id: 10,
        user_name: 'AvaMiller',
        user_image: 'ava_miller.jpg',
        post_id: 1101,
        title: 'The Fascinating World of Marine Biology',
        text: `Beneath the glistening surface of our oceans lies a realm teeming with life and mystery. Marine biology, the study of marine organisms and ecosystems, unveils the intricacies of underwater life and its profound impact on our planet.
    
        Coral reefs, often referred to as the rainforests of the sea, harbor an astounding diversity of marine species. These underwater ecosystems provide vital habitats, protect coastlines, and support local economies.
        
        From the graceful movements of dolphins to the intricate camouflage of octopuses, marine animals have evolved remarkable adaptations to survive in their aquatic environments.
        
        Climate change and human activities threaten marine ecosystems, underscoring the urgency of conservation efforts. The decline of coral reefs, plastic pollution, and overfishing are challenges that demand global attention and action.
        
        Marine biologists play a crucial role in understanding and safeguarding ocean health. Their research informs policies and practices aimed at preserving marine biodiversity and ensuring sustainable fisheries.
        
        As we peer into the blue depths, let's appreciate the wonders of marine life and recognize our role in nurturing and protecting the oceans that sustain us all.`,
        image: 'marine_biology.jpg',
        topics: 'marine biology,ocean life,conservation,ecosystems',
        created_at: '2023-08-11T11:40:00Z',
        last_updated_at: '2023-08-11T13:25:00Z',
        likes_count: 167,
        comments_count: 24,
        views_count: 689,
        time_read: '8 min',
        is_user_following: false,
        is_user_liked: false,
        is_user_bookmark: true,
    },
    {
        user_id: 11,
        user_name: 'MiaClark',
        user_image: 'mia_clark.jpg',
        post_id: 1201,
        title: 'The Renaissance of Analog Hobbies',
        text: `In a digital age dominated by screens and devices, the resurgence of analog hobbies offers a refreshing antidote to the constant buzz of technology. Engaging in hands-on activities not only fosters creativity but also provides a welcome escape from the virtual realm.
    
        The art of journaling, with its tactile pleasure of pen on paper, allows us to chronicle our thoughts, dreams, and observations in a tangible form. Bullet journals, artistic sketches, and gratitude logs become cherished keepsakes.
        
        Analog photography, characterized by the deliberate process of capturing moments on film, invites us to slow down and appreciate the art of composition and lighting. Each photograph becomes a timeless snapshot of memories.
        
        Crafting, whether it's knitting, woodworking, or pottery, celebrates the art of creation with our own hands. The act of shaping raw materials into functional or decorative objects is a testament to human ingenuity and skill.
        
        Board games and puzzles bring people together for face-to-face interactions and collaborative problem-solving. These analog pastimes create bonds and memories that extend beyond virtual connections.
        
        As we immerse ourselves in analog hobbies, we rediscover the joy of tangible experiences and celebrate the beauty of the analog world amidst a digital landscape.`,
        image: 'analog_hobbies.jpg',
        topics: 'hobbies,analog,creativity,crafting',
        created_at: '2023-08-12T15:10:00Z',
        last_updated_at: '2023-08-12T17:00:00Z',
        likes_count: 124,
        comments_count: 18,
        views_count: 512,
        time_read: '7 min',
        is_user_following: true,
        is_user_liked: true,
        is_user_bookmark: false,
    },
    {
        user_id: 12,
        user_name: 'NoahAnderson',
        user_image: 'noah_anderson.jpg',
        post_id: 1301,
        title: 'The Enchanting World of Botanical Gardens',
        text: `Botanical gardens are oases of serenity where nature's finest specimens are showcased in harmonious landscapes. These living museums offer a sanctuary for plant enthusiasts, a haven for relaxation, and a window into the captivating diversity of flora.
    
        Strolling through themed sections, from exotic rainforests to desert succulent gardens, visitors embark on a global journey through ecosystems and plant life.
        
        Orchids in vibrant hues, towering sequoias, and intricate bonsai trees evoke wonder and admiration for the beauty and resilience of the botanical world.
        
        Beyond their aesthetic appeal, botanical gardens play a vital role in conservation. They serve as repositories for rare and endangered species, contributing to the preservation of biodiversity.
        
        Education programs and guided tours provide insights into the science of botany, inspiring future generations to appreciate and protect the environment.
        
        As we immerse ourselves in the enchanting world of botanical gardens, we reconnect with the natural world and find solace in the tranquility they offer.`,
        image: 'botanical_gardens.jpg',
        topics: 'botanical gardens,nature,conservation,plant diversity',
        created_at: '2023-08-13T09:15:00Z',
        last_updated_at: '2023-08-13T11:00:00Z',
        likes_count: 148,
        comments_count: 20,
        views_count: 532,
        time_read: '7 min',
        is_user_following: false,
        is_user_liked: false,
        is_user_bookmark: true,
    },
    {
        user_id: 13,
        user_name: 'LiamTurner',
        user_image: 'liam_turner.jpg',
        post_id: 1401,
        title: 'Culinary Adventures: Exploring Street Food Delights',
        text: `Street food, with its tantalizing aromas and vibrant flavors, offers a glimpse into the heart of a city's culinary culture. From bustling markets to hidden alleyways, street vendors serve up delectable dishes that capture the essence of a place.
    
        The sizzling woks of a night market offer a symphony of stir-fried noodles, skewered meats, and steaming dumplings. Each bite tells a story of tradition and innovation.
        
        Tacos on a Mexican street corner, currywurst in Berlin, or bánh mì in Hanoi—these portable treats showcase the ingenuity of local cooks and the fusion of culinary influences.
        
        Street food fosters a sense of community as locals and travelers gather to share meals, exchange stories, and savor the authenticity of a place.
        
        While the allure of fine dining is undeniable, street food invites us to embrace the joy of unpretentious, unfiltered, and unforgettable food experiences.
        
        Join us on a culinary journey through the colorful world of street food and relish the global tapestry of flavors that define a city's identity.`,
        image: 'street_food.jpg',
        topics: 'culinary,street food,flavors,culture',
        created_at: '2023-08-14T13:40:00Z',
        last_updated_at: '2023-08-14T15:25:00Z',
        likes_count: 192,
        comments_count: 26,
        views_count: 689,
        time_read: '8 min',
        is_user_following: true,
        is_user_liked: true,
        is_user_bookmark: false,
    },
    {
        user_id: 14,
        user_name: 'CharlotteWalker',
        user_image: 'charlotte_walker.jpg',
        post_id: 1501,
        title: 'The Transformative Power of Yoga',
        text: `Yoga is not just a physical practice; it's a holistic journey of self-discovery and transformation. Originating in ancient India, this ancient discipline combines breath, movement, and mindfulness to nurture the body, mind, and spirit.
    
        The practice of asanas, or yoga postures, promotes flexibility, strength, and balance. Each pose is an invitation to explore the body's capabilities and limitations.
        
        Yoga's focus on mindful breathing calms the mind, reduces stress, and enhances mental clarity. The rhythm of the breath becomes a constant anchor in a sea of thoughts.
        
        Beyond the physical and mental benefits, yoga offers a spiritual dimension. Meditation and introspection guide us towards self-awareness and a deeper understanding of our inner selves.
        
        The yoga community is a diverse tapestry of practitioners united by a shared quest for wellness and inner peace. Studios, retreats, and virtual classes create spaces for connection and growth.
        
        Join us on the mat as we embark on a transformative journey through the ancient practice of yoga, honoring its rich traditions while embracing its modern applications.`,
        image: 'transformative_yoga.jpg',
        topics: 'yoga,wellness,mindfulness,spirituality',
        created_at: '2023-08-15T10:30:00Z',
        last_updated_at: '2023-08-15T12:20:00Z',
        likes_count: 215,
        comments_count: 32,
        views_count: 721,
        time_read: '9 min',
        is_user_following: false,
        is_user_liked: false,
        is_user_bookmark: true,
    },
    {
        user_id: 15,
        user_name: 'HarperYoung',
        user_image: 'harper_young.jpg',
        post_id: 1601,
        title: 'Innovations Shaping the Future of Healthcare',
        text: `Advancements in technology and medical research are revolutionizing healthcare, offering new tools and possibilities for diagnosis, treatment, and patient care. From telemedicine to personalized therapies, these innovations are paving the way for a healthier and more connected future.
    
        Telemedicine, driven by digital communication platforms, enables remote consultations and medical advice, breaking down geographical barriers and improving access to care.
        
        Precision medicine tailors treatments to individual patients based on genetic, environmental, and lifestyle factors. This personalized approach maximizes treatment efficacy and minimizes side effects.
        
        The use of artificial intelligence and machine learning enhances diagnostic accuracy and supports healthcare professionals in making informed decisions.
        
        3D printing technology has expanded into the realm of healthcare, producing custom implants, prosthetics, and even human tissue for transplantation.
        
        As we embrace the potential of these innovations, we celebrate the intersection of technology and humanity, where science and compassion work hand in hand to enhance the well-being of individuals and communities.`,
        image: 'future_healthcare.jpg',
        topics: 'healthcare,innovation,technology,medicine',
        created_at: '2023-08-16T14:15:00Z',
        last_updated_at: '2023-08-16T16:00:00Z',
        likes_count: 173,
        comments_count: 25,
        views_count: 632,
        time_read: '8 min',
        is_user_following: true,
        is_user_liked: true,
        is_user_bookmark: false,
    },
    {
        user_id: 16,
        user_name: 'GraceLewis',
        user_image: 'grace_lewis.jpg',
        post_id: 1701,
        title: 'Preserving Ancient Traditions in a Modern World',
        text: `Amidst the rapid pace of modernization, the importance of preserving ancient traditions and cultural practices cannot be overstated. These age-old customs are a testament to human heritage and provide a link to our collective history.
    
        Indigenous knowledge passed down through generations offers insights into sustainable practices and harmonious coexistence with nature.
        
        Traditional crafts, from weaving to pottery, tell stories of craftsmanship and artistry that have stood the test of time. Supporting local artisans sustains cultural identity and promotes economic empowerment.
        
        Festivals and rituals celebrate milestones, honor deities, and commemorate historical events. These communal gatherings foster a sense of belonging and reinforce cultural bonds.
        
        Oral traditions, folklore, and storytelling transmit wisdom, values, and morals that continue to resonate in contemporary societies.
        
        By embracing and revitalizing these traditions, we ensure that the mosaic of human cultures remains vibrant and diverse, enriching our present and guiding our future.`,
        image: 'ancient_traditions.jpg',
        topics: 'culture,traditions,heritage,history',
        created_at: '2023-08-17T11:50:00Z',
        last_updated_at: '2023-08-17T13:40:00Z',
        likes_count: 198,
        comments_count: 28,
        views_count: 754,
        time_read: '9 min',
        is_user_following: false,
        is_user_liked: false,
        is_user_bookmark: true,
    },
    {
        user_id: 17,
        user_name: 'JamesParker',
        user_image: 'james_parker.jpg',
        post_id: 1801,
        title: 'The Magic of Live Music: Connecting Through Sound',
        text: `Live music is a transformative experience that transcends language and cultural barriers. The resonance of instruments, the rhythm of drums, and the power of vocals create an immersive journey that unites people in shared moments of emotion and joy.
    
        Concerts and music festivals are not mere performances; they are communal celebrations of human creativity. The energy of a crowd singing along to their favorite songs is a testament to the unifying force of music.
        
        Live music has the ability to transport us to different times and places, evoking memories and emotions that are deeply personal yet universally relatable.
        
        Musicians are storytellers, using melodies and lyrics to communicate ideas, provoke thought, and inspire change. They have the power to give voice to the unheard and amplify messages of hope and resilience.
        
        As we gather under the open sky or within the walls of a concert hall, let us revel in the magic of live music and recognize its role in connecting us to our own humanity and to each other.`,
        image: 'live_music.jpg',
        topics: 'music,live music,concerts,unity',
        created_at: '2023-08-18T15:30:00Z',
        last_updated_at: '2023-08-18T17:20:00Z',
        likes_count: 227,
        comments_count: 34,
        views_count: 801,
        time_read: '9 min',
        is_user_following: true,
        is_user_liked: true,
        is_user_bookmark: false,
    },
    {
        user_id: 18,
        user_name: 'EmmaMorris',
        user_image: 'emma_morris.jpg',
        post_id: 1901,
        title: 'Exploring the Marvels of Underwater Photography',
        text: `Underwater photography opens a portal to an ethereal realm beneath the waves—a world teeming with life, color, and mystery. Through the lens, we capture fleeting moments of marine beauty and gain a new perspective on the interconnectedness of ecosystems.
    
        Coral reefs, with their kaleidoscope of colors and intricate structures, serve as underwater cities bustling with activity. Photographs preserve the grandeur of these fragile habitats.
        
        Macro photography reveals the intricate details of tiny sea creatures, from delicate seahorses to flamboyant nudibranchs. Each photograph is a celebration of the intricate diversity of marine life.
        
        Capturing marine behavior, from the dance of dolphins to the hunt of a predator, allows us to witness the raw drama and harmony of the underwater world.
        
        Underwater photography also highlights the urgent need for marine conservation. Images of plastic pollution, coral bleaching, and habitat destruction serve as powerful calls to action.
        
        Join us as we dive into the enchanting realm of underwater photography and explore the wonders that lie beneath the surface.`,
        image: 'underwater_photography.jpg',
        topics: 'photography,underwater,marine life,conservation',
        created_at: '2023-08-19T12:45:00Z',
        last_updated_at: '2023-08-19T14:30:00Z',
        likes_count: 186,
        comments_count: 27,
        views_count: 706,
        time_read: '8 min',
        is_user_following: false,
        is_user_liked: false,
        is_user_bookmark: true,
    },
    {
        user_id: 19,
        user_name: 'BenjaminHarris',
        user_image: 'benjamin_harris.jpg',
        post_id: 2001,
        title: 'Embracing Minimalism: Finding Freedom in Simplicity',
        text: `In a world of excess and consumerism, the philosophy of minimalism offers a path to liberation and contentment. By intentionally simplifying our lives and focusing on what truly matters, we create space for clarity, mindfulness, and a deeper connection to ourselves and the world.
    
        Minimalism is not about deprivation; it's about shedding the non-essential to make room for the essential. It's a conscious choice to let go of material clutter and embrace the beauty of a life well-lived.
        
        A minimalist lifestyle encourages us to savor experiences over possessions, valuing moments of connection, creativity, and reflection.
        
        From decluttering our physical spaces to streamlining our digital presence, minimalism empowers us to prioritize our well-being and mental health.
        
        Minimalism extends beyond possessions to our choices, relationships, and aspirations. By focusing on the core elements that bring us joy and fulfillment, we create a life that aligns with our true values.
        
        Join us as we explore the art of minimalism and embark on a journey to simplify, declutter, and rediscover the freedom that comes from living with intention.`,
        image: 'minimalism.jpg',
        topics: 'minimalism,simplicity,well-being,conscious living',
        created_at: '2023-08-20T09:10:00Z',
        last_updated_at: '2023-08-20T11:00:00Z',
        likes_count: 159,
        comments_count: 23,
        views_count: 615,
        time_read: '7 min',
        is_user_following: true,
        is_user_liked: true,
        is_user_bookmark: false,
    },
    {
        user_id: 20,
        user_name: 'LunaGarcia',
        user_image: 'luna_garcia.jpg',
        post_id: 2101,
        title: 'Capturing the Essence of Urban Photography',
        text: `Urban photography is a dynamic art form that captures the essence of city life, from its soaring skyscrapers to its bustling streets. Through the lens, we explore the interplay of architecture, culture, and human stories that shape the urban landscape.
    
        Cityscapes at dawn, dusk, or under the neon glow of night reveal the ever-changing moods of urban environments. Each photograph tells a story of a city in motion.
        
        Street photography freezes candid moments of urban life—laughter, contemplation, hustle, and bustle. These slices of life offer glimpses into the human experience.
        
        Architecture becomes a work of art as lines, angles, and textures interact with light and shadow. From historic landmarks to modern marvels, each building has a tale to tell.
        
        Urban decay and renewal are captured in the juxtaposition of old and new, dilapidation and revitalization. These photographs reflect the resilience of cities and their inhabitants.
        
        Join us as we navigate the streets with our cameras, seeking the beauty, chaos, and authenticity that define the vibrant tapestry of urban photography.`,
        image: 'urban_photography.jpg',
        topics: 'photography,urban life,cityscapes,architecture',
        created_at: '2023-08-21T14:20:00Z',
        last_updated_at: '2023-08-21T16:10:00Z',
        likes_count: 175,
        comments_count: 26,
        views_count: 642,
        time_read: '8 min',
        is_user_following: false,
        is_user_liked: false,
        is_user_bookmark: true,
    },
    {
        user_id: 21,
        user_name: 'LoganCarter',
        user_image: 'logan_carter.jpg',
        post_id: 2201,
        title: 'Preserving Cultural Diversity: The Importance of Language',
        text: `Languages are not just tools of communication; they are carriers of culture, history, and identity. The preservation of linguistic diversity is a vital endeavor that ensures the survival of unique perspectives and traditions across the globe.
    
        Indigenous languages connect communities to ancestral knowledge and ecological wisdom. They encapsulate a profound understanding of the natural world and offer insights into sustainable living.
        
        Minority languages capture nuances of expression, humor, and emotion that enrich human communication. They contribute to the mosaic of human experience and foster cross-cultural understanding.
        
        Multilingualism equips individuals with cognitive benefits, enhancing memory, problem-solving skills, and empathy. It expands horizons and fosters a sense of global citizenship.
        
        Language revitalization efforts, through education, storytelling, and cultural exchange, empower communities to reclaim and celebrate their linguistic heritage.
        
        Let us celebrate the kaleidoscope of languages that shape our world and recognize the role of language in shaping our shared humanity.`,
        image: 'language_preservation.jpg',
        topics: 'language,cultural diversity,linguistics,heritage',
        created_at: '2023-08-22T11:15:00Z',
        last_updated_at: '2023-08-22T13:05:00Z',
        likes_count: 188,
        comments_count: 29,
        views_count: 718,
        time_read: '9 min',
        is_user_following: true,
        is_user_liked: true,
        is_user_bookmark: false,
    },
    {
        user_id: 22,
        user_name: 'SophiaBrown',
        user_image: 'sophia_brown.jpg',
        post_id: 2301,
        title: 'The Art of Mindful Travel: Exploring with Presence',
        text: `Mindful travel is a transformative journey that invites us to immerse ourselves fully in the present moment. It's about slowing down, savoring experiences, and forging connections with people and places in a deeper and more meaningful way.
    
        Instead of rushing from one tourist attraction to another, mindful travelers embrace spontaneity and serendipity, allowing the journey itself to be the destination.
        
        Engaging with local communities and cultures fosters empathy and broadens our perspectives. Learning from others and sharing stories create bridges of understanding across cultures.
        
        Mindful travel encourages sustainable practices, from supporting local businesses to minimizing our environmental impact. It's a conscious choice to travel responsibly and leave a positive footprint.
        
        By cultivating a mindful approach to travel, we become co-creators of our journeys, sowing the seeds of unforgettable memories and forging connections that transcend time and place.`,
        image: 'mindful_travel.jpg',
        topics: 'travel,mindfulness,culture,exploration',
        created_at: '2023-08-23T14:30:00Z',
        last_updated_at: '2023-08-23T16:15:00Z',
        likes_count: 203,
        comments_count: 31,
        views_count: 765,
        time_read: '9 min',
        is_user_following: true,
        is_user_liked: true,
        is_user_bookmark: false,
    },
    {
        user_id: 22,
        user_name: 'SophiaBrown',
        user_image: 'sophia_brown.jpg',
        post_id: 2401,
        title: 'Rediscovering Creativity: Embracing Artistic Expression',
        text: `Creativity is an innate human trait that transcends boundaries and expresses the essence of our individuality. In a world that often prioritizes productivity over play, embracing artistic endeavors ignites a sense of wonder and rejuvenates the spirit.
    
        Painting, drawing, sculpting, and other visual arts allow us to communicate emotions and narratives that words alone cannot convey. Each brushstroke or line becomes a glimpse into the artist's soul.
        
        Writing, whether it's poetry, prose, or journaling, offers a refuge for thoughts and feelings to unfold, creating a tapestry of words that mirror the human experience.
        
        Music and dance channel energy and emotions, becoming conduits for storytelling and self-expression. Rhythms and melodies resonate with the heart and echo the human journey.
        
        The act of creating is a meditative practice that fosters mindfulness, presence, and self-discovery. It's a celebration of the beauty that emerges when we tap into the wellspring of our imagination.
        
        Join us as we embark on a creative journey, reclaiming the joy of artistic expression and allowing our unique voices to shine.`,
        image: 'artistic_expression.jpg',
        topics: 'creativity,art,expression,self-discovery',
        created_at: '2023-08-24T11:40:00Z',
        last_updated_at: '2023-08-24T13:25:00Z',
        likes_count: 176,
        comments_count: 26,
        views_count: 621,
        time_read: '7 min',
        is_user_following: false,
        is_user_liked: false,
        is_user_bookmark: true,
    },
    {
        user_id: 22,
        user_name: 'SophiaBrown',
        user_image: 'sophia_brown.jpg',
        post_id: 2501,
        title: 'Cultivating Gratitude: Nourishing the Heart',
        text: `Gratitude is a powerful antidote to the hustle and bustle of modern life. It's a practice that shifts our focus from what we lack to what we have, creating a ripple of positivity that touches every aspect of our existence.
    
        Keeping a gratitude journal, where we reflect on moments of joy, kindness, and beauty, cultivates a sense of appreciation for the ordinary and extraordinary.
        
        Expressing gratitude, whether through words, gestures, or acts of kindness, strengthens relationships and fosters a sense of connection with others.
        
        Mindful gratitude meditations ground us in the present, allowing us to acknowledge the gifts of each moment and find solace in the simple pleasures of life.
        
        Gratitude serves as a shield against negativity and stress, enhancing emotional well-being and promoting resilience in the face of challenges.
        
        Let us embark on a journey of gratitude, embracing the practice as a daily ritual that nourishes our hearts and radiates positivity to the world around us.`,
        image: 'cultivating_gratitude.jpg',
        topics: 'gratitude,well-being,mindfulness,positivity',
        created_at: '2023-08-25T14:15:00Z',
        last_updated_at: '2023-08-25T16:00:00Z',
        likes_count: 209,
        comments_count: 29,
        views_count: 732,
        time_read: '8 min',
        is_user_following: true,
        is_user_liked: true,
        is_user_bookmark: false,
    },
    {
        user_id: 22,
        user_name: 'SophiaBrown',
        user_image: 'sophia_brown.jpg',
        post_id: 2601,
        title: 'The Power of Compassionate Listening',
        text: `Compassionate listening is a practice that transcends words and empowers us to connect deeply with others. By giving our full attention, withholding judgment, and opening our hearts, we create a safe space for empathy and understanding to flourish.
    
        Active listening, where we engage fully in the speaker's words and emotions, conveys respect and validates their experiences and feelings.
        
        Compassionate listening nurtures relationships by fostering trust, vulnerability, and mutual support. It's a gift we offer to others, signaling that their voices are heard and valued.
        
        The practice extends beyond verbal communication to body language, tone, and presence. It involves attuning ourselves to the unsaid and the emotions that lie beneath the surface.
        
        Compassionate listening is a skill that can be cultivated through mindfulness and intention. It requires us to quiet our own internal chatter and truly be present for another person.
        
        Let us embark on a journey of compassionate listening, recognizing that by being fully present for others, we create a ripple of healing and connection that spans the human experience.`,
        image: 'compassionate_listening.jpg',
        topics: 'compassion,listening,empathy,communication',
        created_at: '2023-08-26T11:10:00Z',
        last_updated_at: '2023-08-26T13:00:00Z',
        likes_count: 198,
        comments_count: 27,
        views_count: 681,
        time_read: '8 min',
        is_user_following: false,
        is_user_liked: false,
        is_user_bookmark: true,
    },
    {
        user_id: 22,
        user_name: 'SophiaBrown',
        user_image: 'sophia_brown.jpg',
        post_id: 2701,
        title: 'The Joy of Volunteering: Building Stronger Communities',
        text: `Volunteering is a bridge that connects diverse individuals and communities, creating a tapestry of shared experiences, kindness, and positive change. Through acts of service, we not only uplift others but also discover the profound fulfillment that comes from giving back.
    
        Volunteering at local shelters, food banks, or community centers brings us face-to-face with the realities of those in need, fostering empathy and fostering a sense of interconnectedness.
        
        Skills-based volunteering allows us to leverage our unique talents to support causes we're passionate about. From teaching to technology, every skill has the potential to make a difference.
        
        Volunteering is a reminder that even small actions can have a significant impact. Whether it's planting a tree or mentoring a child, our efforts contribute to a brighter future.
        
        Building relationships with fellow volunteers creates a sense of camaraderie and shared purpose. Together, we become agents of positive change, strengthening the fabric of society.
        
        Let us embrace the joy of volunteering, recognizing that in each act of service, we sow seeds of compassion, hope, and resilience that transform lives and communities.`,
        image: 'volunteering.jpg',
        topics: 'volunteering,community,service,kindness',
        created_at: '2023-08-27T15:20:00Z',
        last_updated_at: '2023-08-27T17:10:00Z',
        likes_count: 223,
        comments_count: 33,
        views_count: 789,
        time_read: '9 min',
        is_user_following: true,
        is_user_liked: true,
        is_user_bookmark: false,
    },
    {
        user_id: 22,
        user_name: 'SophiaBrown',
        user_image: 'sophia_brown.jpg',
        post_id: 2801,
        title: 'The Wisdom of Nature: Lessons Learned from the Earth',
        text: `Nature is a profound teacher, offering insights and wisdom that resonate with the human spirit. From the ebb and flow of seasons to the interconnectedness of ecosystems, the natural world imparts invaluable lessons that guide us on our journey.
    
        The resilience of trees in the face of storms reminds us of the strength that can emerge from adversity. Like trees, we can weather challenges and grow stronger in the process.
        
        Observation of wildlife reveals the delicate balance of life and the interconnected roles that each species plays in maintaining ecological harmony.
        
        The rhythmic cycles of nature—the rising sun, the phases of the moon, and the tides—remind us of the cyclical nature of existence and the importance of embracing change.
        
        Nature invites us to slow down and be fully present, whether it's watching a sunrise, feeling the earth beneath our feet, or listening to the symphony of birdsong.
        
        Let us embark on a journey of mindful connection with nature, recognizing that by attuning ourselves to its wisdom, we cultivate a deeper understanding of ourselves and the world around us.`,
        image: 'nature_wisdom.jpg',
        topics: 'nature,lessons,ecology,connection',
        created_at: '2023-08-28T12:30:00Z',
        last_updated_at: '2023-08-28T14:15:00Z',
        likes_count: 186,
        comments_count: 25,
        views_count: 658,
        time_read: '7 min',
        is_user_following: false,
        is_user_liked: false,
        is_user_bookmark: true,
    },
    {
        user_id: 1,
        user_name: 'JohnSmith',
        user_image: 'john_smith.jpg',
        post_id: 2901,
        title: 'The Wonders of Astrophotography: Capturing the Night Sky',
        text: `Astrophotography is a gateway to the cosmos, allowing us to capture the breathtaking beauty of the night sky and the mysteries that lie beyond. With the right equipment and techniques, we can unveil the universe's secrets and share its splendor with the world.
    
        Photographing star trails reveals the Earth's rotation and the dance of the stars across the celestial canvas. Each image is a visual testament to the passage of time.
        
        The ethereal glow of the Milky Way galaxy, stretching across the heavens, reminds us of our place in the vastness of space and time.
        
        Planetary photography unveils the intricate details of celestial neighbors, from the majestic rings of Saturn to the enigmatic terrain of Mars.
        
        Deep-sky objects, such as nebulae and galaxies, offer glimpses into the birth and death of stars, painting a picture of the cosmic drama unfolding in the cosmos.
        
        Join us on a cosmic journey through the lens, as we explore the wonders of astrophotography and unlock the universe's visual poetry.`,
        image: 'astrophotography.jpg',
        topics: 'astrophotography,night sky,astronomy,cosmos',
        created_at: '2023-08-29T14:10:00Z',
        last_updated_at: '2023-08-29T16:00:00Z',
        likes_count: 237,
        comments_count: 36,
        views_count: 822,
        time_read: '10 min',
        is_user_following: true,
        is_user_liked: true,
        is_user_bookmark: false,
    },
    {
        user_id: 2,
        user_name: 'EmilyJohnson',
        user_image: 'emily_johnson.jpg',
        post_id: 3001,
        title: 'The Journey of Self-Discovery Through Solo Travel',
        text: `Solo travel is a transformative adventure that invites us to embark on a journey of self-discovery, independence, and personal growth. With each step into the unknown, we learn to embrace our strengths, navigate challenges, and cultivate a deeper understanding of ourselves.
    
        Exploring new destinations alone allows us to set our own pace, follow our instincts, and create a narrative that is uniquely ours.
        
        Meeting fellow travelers and locals fosters connections that transcend language and culture, reminding us of the shared human experience.
        
        Solo travel challenges us to step out of our comfort zones, confront fears, and build resilience. Every obstacle becomes an opportunity for growth.
        
        The quiet moments of introspection while watching a sunset, strolling through a bustling market, or hiking in solitude allow us to connect with our inner thoughts and desires.
        
        Join us on a voyage of self-discovery through the lens of solo travel, as we embrace the unknown and uncover the treasures that await within and beyond.`,
        image: 'solo_travel.jpg',
        topics: 'travel,self-discovery,adventure,growth',
        created_at: '2023-08-30T11:40:00Z',
        last_updated_at: '2023-08-30T13:30:00Z',
        likes_count: 218,
        comments_count: 30,
        views_count: 706,
        time_read: '9 min',
        is_user_following: false,
        is_user_liked: false,
        is_user_bookmark: true,
    },
    {
        user_id: 3,
        user_name: 'MichaelWilliams',
        user_image: 'michael_williams.jpg',
        post_id: 3101,
        title: 'Exploring Culinary Diversity: A Global Gastronomic Journey',
        text: `Culinary exploration is a passport to the world's diverse flavors, traditions, and cultures. Through the medium of food, we transcend borders and embark on a sensory journey that tantalizes the taste buds and nourishes the soul.
    
        Street food stalls offer a mosaic of global flavors, from the spicy tang of Indian chaat to the savory delights of Middle Eastern falafel.
        
        Traditional family recipes handed down through generations provide a glimpse into the heart of a culture, preserving flavors that carry stories of heritage and home.
        
        Fusion cuisine, a marriage of culinary influences, ignites the imagination and challenges traditional notions of taste, texture, and presentation.
        
        Cooking classes and food tours invite us to become active participants in the culinary process, empowering us to recreate and share global dishes in our own kitchens.
        
        Join us on a gastronomic journey that transcends borders and celebrates the universal language of food, reminding us of the rich tapestry of flavors that unite us as a global family.`,
        image: 'culinary_diversity.jpg',
        topics: 'culinary,food,culture,flavors',
        created_at: '2023-08-31T15:25:00Z',
        last_updated_at: '2023-08-31T17:15:00Z',
        likes_count: 245,
        comments_count: 35,
        views_count: 801,
        time_read: '10 min',
        is_user_following: true,
        is_user_liked: true,
        is_user_bookmark: false,
    },
    {
        user_id: 4,
        user_name: 'OliviaBrown',
        user_image: 'olivia_brown.jpg',
        post_id: 3201,
        title: 'The Resilience of Wildlife: Thriving Amidst Adversity',
        text: `Wildlife embodies the spirit of resilience, adapting and thriving in the face of environmental challenges. From the heart of the rainforest to the depths of the ocean, the animal kingdom's tales of survival inspire awe and reverence.
    
        Migration patterns, honed over generations, demonstrate the remarkable ability of animals to navigate vast distances and changing landscapes.
        
        Camouflage and mimicry are nature's disguises, allowing creatures to blend seamlessly into their surroundings and outwit predators.
        
        The complex social structures of animal communities—whether in a pride of lions or a pod of dolphins—showcase the strength of cooperation and mutual support.
        
        Conservation efforts and rewilding initiatives restore balance to ecosystems, offering hope for endangered species and demonstrating humanity's role as stewards of the Earth.
        
        Join us as we delve into the world of wildlife resilience, celebrating the tenacity and vitality of the creatures that share our planet.`,
        image: 'wildlife_resilience.jpg',
        topics: 'wildlife,resilience,conservation,nature',
        created_at: '2023-09-01T11:15:00Z',
        last_updated_at: '2023-09-01T13:05:00Z',
        likes_count: 206,
        comments_count: 28,
        views_count: 718,
        time_read: '9 min',
        is_user_following: false,
        is_user_liked: false,
        is_user_bookmark: true,
    },
    {
        user_id: 5,
        user_name: 'DanielMartinez',
        user_image: 'daniel_martinez.jpg',
        post_id: 3301,
        title: 'The Essence of Poetry: Unveiling Emotions Through Verses',
        text: `Poetry is a form of alchemy that transforms raw emotion and experience into verses that resonate with the human soul. With carefully chosen words, poets capture the essence of love, longing, joy, and sorrow, inviting readers on an intimate journey of introspection.
    
        Haiku, a minimalist form of poetry, distills moments into syllables, inviting readers to pause and find beauty in the simplicity of existence.
        
        Free verse liberates the poet from traditional structures, allowing emotions to flow freely across the page like a stream of consciousness.
        
        Sonnets and ballads pay homage to rhythm and rhyme, echoing the cadence of the human heart and the melodies of life.
        
        Spoken word poetry amplifies voices, delivering passionate performances that bridge the gap between spoken language and written word.
        
        Join us as we explore the magic of poetry, unlocking its power to illuminate the human experience and create connections that transcend time and space.`,
        image: 'essence_of_poetry.jpg',
        topics: 'poetry,emotion,verses,expression,movies',
        created_at: '2023-09-02T14:20:00Z',
        last_updated_at: '2023-09-02T16:10:00Z',
        likes_count: 194,
        comments_count: 27,
        views_count: 695,
        time_read: '8 min',
        is_user_following: true,
        is_user_liked: true,
        is_user_bookmark: false,
    },
    {
        user_id: 6,
        user_name: 'AvaJohnson',
        user_image: 'ava_johnson.jpg',
        post_id: 3401,
        title: 'The Magic of Dance: Expressions in Motion',
        text: `Dance is a universal language that transcends words, weaving stories and emotions through the fluidity of movement. From the grace of ballet to the exuberance of hip-hop, dance invites us to express, connect, and celebrate the human experience.
    
        Ballet, with its precise technique and ethereal movements, conveys tales of love, tragedy, and beauty with each arabesque and pirouette.
        
        Contemporary dance breaks boundaries, blending genres and defying conventions, creating a canvas for innovation and self-expression.
        
        Cultural dances honor tradition and heritage, passing down stories and rituals through generations with every step and gesture.
        
        Street dances, born from urban culture, mirror the pulse of city life, celebrating community, creativity, and the freedom of movement.
        
        Join us on a journey through the world of dance, where bodies become instruments, emotions become choreography, and the magic of movement unfolds.`,
        image: 'magic_of_dance.jpg',
        topics: 'dance,expression,movement,art,movies',
        created_at: '2023-09-03T11:10:00Z',
        last_updated_at: '2023-09-03T13:00:00Z',
        likes_count: 205,
        comments_count: 29,
        views_count: 708,
        time_read: '9 min',
        is_user_following: false,
        is_user_liked: false,
        is_user_bookmark: true,
    },
    {
        user_id: 20,
        user_name: 'MiaMartinez',
        user_image: 'mia_martinez.jpg',
        post_id: 4801,
        title: 'The Poetry of Skies: Celestial Wonders and Astronomical Marvels',
        text: `The night sky is a canvas of celestial poetry, where stars, planets, and galaxies trace intricate patterns that have inspired wonder and contemplation for millennia. Through astronomy and stargazing, we traverse the cosmos, exploring the mysteries that adorn the heavens.
    
        Constellations, myths written in the stars, connect cultures across time, serving as celestial storytellers that link us to the past.
        
        Planetary exploration unveils the beauty and diversity of worlds beyond Earth, from the fiery storms of Jupiter to the icy landscapes of Pluto.
        
        Nebulae, stellar nurseries where new stars are born, paint the cosmos with vibrant colors, inviting us to witness the birth of suns.
        
        The dance of celestial bodies, from meteor showers to solar eclipses, offers fleeting yet breathtaking moments that remind us of our place in the universe.
        
        Join us on an astronomical journey, as we gaze upwards and embrace the poetry of skies, where the language of the cosmos speaks to our sense of awe and curiosity.`,
        image: 'celestial_wonders.jpg',
        topics: 'astronomy,celestial wonders,cosmos,night sky,movies',
        created_at: '2023-09-17T11:40:00Z',
        last_updated_at: '2023-09-17T13:30:00Z',
        likes_count: 221,
        comments_count: 31,
        views_count: 719,
        time_read: '8 min',
        is_user_following: false,
        is_user_liked: false,
        is_user_bookmark: true,
    },
    {
        user_id: 21,
        user_name: 'OliverBrown',
        user_image: 'oliver_brown.jpg',
        post_id: 4901,
        title: 'The Culinary World Tour: A Gastronomic Expedition',
        text: `Cuisine is a passport to cultures and flavors, inviting us on a global gastronomic journey that traverses continents, traditions, and palates. From savoring the umami of Japanese cuisine to indulging in the rich spices of Indian dishes, culinary exploration celebrates diversity and the art of cooking.
    
        Italian cuisine, renowned for its simplicity and quality ingredients, brings comfort and warmth through iconic dishes like pasta and pizza.
        
        Thai cuisine, a harmonious blend of sweet, sour, salty, and spicy, delights the senses and offers a glimpse into the vibrant street food culture.
        
        Mexican cuisine, a tapestry of flavors and colors, showcases dishes like tacos and mole that are rooted in history and regional diversity.
        
        Fusion cuisine marries culinary traditions, creating innovative and delectable combinations that push the boundaries of taste and creativity.
        
        Join us on a culinary expedition, where we embark on a voyage of flavors, traditions, and stories that unfold on the plate and delight the senses.`,
        image: 'culinary_world_tour.jpg',
        topics: 'cuisine,gastronomy,food culture,flavors,movies',
        created_at: '2023-09-18T14:25:00Z',
        last_updated_at: '2023-09-18T16:15:00Z',
        likes_count: 207,
        comments_count: 30,
        views_count: 708,
        time_read: '8 min',
        is_user_following: true,
        is_user_liked: true,
        is_user_bookmark: false,
    },
];

const dummyProfile = [
    {
        user_id: 1,
        user_name: 'JohnSmith',
        user_image: 'john_smith.jpg',
        bio: 'Exploring the beauty of the world, one adventure at a time.',
        post_count: 8,
        created_at: '2023-08-01T10:00:00Z',
        followers_count: 564,
        following_count: 238,
        lists_count: 12,
        draft_count: 3,
        is_user_following: false,
    },
    {
        user_id: 2,
        user_name: 'EmilyJohnson',
        user_image: 'emily_johnson.jpg',
        bio: 'Lover of literature, art, and all things creative.',
        post_count: 14,
        created_at: '2023-08-02T11:30:00Z',
        followers_count: 789,
        following_count: 172,
        lists_count: 8,
        draft_count: 0,
        is_user_following: true,
    },
    {
        user_id: 3,
        user_name: 'MichaelBrown',
        user_image: 'michael_brown.jpg',
        bio: 'Passionate about the cosmos and the mysteries of the universe.',
        post_count: 11,
        created_at: '2023-08-03T09:45:00Z',
        followers_count: 643,
        following_count: 327,
        lists_count: 6,
        draft_count: 2,
        is_user_following: false,
    },
    {
        user_id: 4,
        user_name: 'SophiaMiller',
        user_image: 'sophia_miller.jpg',
        bio: 'Exploring the intersections of art, science, and philosophy.',
        post_count: 19,
        created_at: '2023-08-04T14:20:00Z',
        followers_count: 852,
        following_count: 420,
        lists_count: 10,
        draft_count: 1,
        is_user_following: true,
    },
    {
        user_id: 5,
        user_name: 'DanielWilson',
        user_image: 'daniel_wilson.jpg',
        bio: 'Curious mind with a passion for history and ancient civilizations.',
        post_count: 27,
        created_at: '2023-08-05T12:15:00Z',
        followers_count: 917,
        following_count: 289,
        lists_count: 14,
        draft_count: 4,
        is_user_following: false,
    },
    {
        user_id: 6,
        user_name: 'OliviaMartinez',
        user_image: 'olivia_martinez.jpg',
        bio: 'Finding beauty in everyday moments and capturing them through photography.',
        post_count: 13,
        created_at: '2023-08-06T09:30:00Z',
        followers_count: 705,
        following_count: 173,
        lists_count: 7,
        draft_count: 0,
        is_user_following: true,
    },
    {
        user_id: 7,
        user_name: 'EthanDavis',
        user_image: 'ethan_davis.jpg',
        bio: 'Avid traveler and outdoor enthusiast. Nature is my playground.',
        post_count: 22,
        created_at: '2023-08-07T14:10:00Z',
        followers_count: 760,
        following_count: 215,
        lists_count: 9,
        draft_count: 2,
        is_user_following: false,
    },
    {
        user_id: 8,
        user_name: 'AvaGarcia',
        user_image: 'ava_garcia.jpg',
        bio: 'Adventuring through pages of books and exploring the landscapes of imagination.',
        post_count: 17,
        created_at: '2023-08-08T10:45:00Z',
        followers_count: 634,
        following_count: 302,
        lists_count: 11,
        draft_count: 1,
        is_user_following: true,
    },
    {
        user_id: 9,
        user_name: 'WilliamMartinez',
        user_image: 'william_martinez.jpg',
        bio: 'Documenting the world through the lens of a camera and the stroke of a pen.',
        post_count: 29,
        created_at: '2023-08-09T12:55:00Z',
        followers_count: 921,
        following_count: 198,
        lists_count: 13,
        draft_count: 3,
        is_user_following: false,
    },
    {
        user_id: 10,
        user_name: 'SophiaLee',
        user_image: 'sophia_lee.jpg',
        bio: 'Exploring cultures, traditions, and stories across the globe.',
        post_count: 15,
        created_at: '2023-08-10T14:30:00Z',
        followers_count: 802,
        following_count: 265,
        lists_count: 8,
        draft_count: 1,
        is_user_following: true,
    },
    {
        user_id: 11,
        user_name: 'LoganWilson',
        user_image: 'logan_wilson.jpg',
        bio: 'Venturing into the world of technology and unraveling its mysteries.',
        post_count: 20,
        created_at: '2023-08-11T11:20:00Z',
        followers_count: 688,
        following_count: 177,
        lists_count: 10,
        draft_count: 0,
        is_user_following: false,
    },
    {
        user_id: 12,
        user_name: 'EmmaSmith',
        user_image: 'emma_smith.jpg',
        bio: 'Creating art, one brushstroke at a time, and exploring the endless hues of life.',
        post_count: 24,
        created_at: '2023-08-12T09:15:00Z',
        followers_count: 749,
        following_count: 328,
        lists_count: 9,
        draft_count: 2,
        is_user_following: true,
    },
    {
        user_id: 13,
        user_name: 'JacksonJohnson',
        user_image: 'jackson_johnson.jpg',
        bio: 'Seeking the harmony between the digital and the natural world.',
        post_count: 18,
        created_at: '2023-08-13T13:40:00Z',
        followers_count: 815,
        following_count: 221,
        lists_count: 12,
        draft_count: 1,
        is_user_following: false,
    },
    {
        user_id: 14,
        user_name: 'SophiaBrown',
        user_image: 'sophia_brown.jpg',
        bio: 'Discovering the world through the lens of a camera and a heart full of curiosity.',
        post_count: 16,
        created_at: '2023-08-14T10:10:00Z',
        followers_count: 782,
        following_count: 239,
        lists_count: 11,
        draft_count: 1,
        is_user_following: true,
    },
    {
        user_id: 15,
        user_name: 'EthanMiller',
        user_image: 'ethan_miller.jpg',
        bio: 'Exploring the delicate balance between art, nature, and technology.',
        post_count: 21,
        created_at: '2023-08-15T12:25:00Z',
        followers_count: 615,
        following_count: 312,
        lists_count: 10,
        draft_count: 3,
        is_user_following: false,
    },
    {
        user_id: 16,
        user_name: 'IsabellaGarcia',
        user_image: 'isabella_garcia.jpg',
        bio: 'Adventures in the world of words and the magic they hold.',
        post_count: 12,
        created_at: '2023-08-16T14:40:00Z',
        followers_count: 828,
        following_count: 191,
        lists_count: 8,
        draft_count: 0,
        is_user_following: true,
    },
    {
        user_id: 17,
        user_name: 'MasonWilson',
        user_image: 'mason_wilson.jpg',
        bio: 'Journeying through history, unraveling stories of the past.',
        post_count: 26,
        created_at: '2023-08-17T11:15:00Z',
        followers_count: 774,
        following_count: 275,
        lists_count: 12,
        draft_count: 2,
        is_user_following: false,
    },
    {
        user_id: 18,
        user_name: 'EmmaMartinez',
        user_image: 'emma_martinez.jpg',
        bio: 'A symphony of words and colors, woven into stories and art.',
        post_count: 15,
        created_at: '2023-08-18T09:30:00Z',
        followers_count: 691,
        following_count: 208,
        lists_count: 7,
        draft_count: 1,
        is_user_following: true,
    },
    {
        user_id: 19,
        user_name: 'LucasLee',
        user_image: 'lucas_lee.jpg',
        bio: 'Roaming the landscapes of imagination, one brushstroke at a time.',
        post_count: 28,
        created_at: '2023-08-19T13:20:00Z',
        followers_count: 833,
        following_count: 322,
        lists_count: 13,
        draft_count: 3,
        is_user_following: false,
    },
    {
        user_id: 20,
        user_name: 'AvaJohnson',
        user_image: 'ava_johnson.jpg',
        bio: 'Capturing fleeting moments and turning them into lasting memories.',
        post_count: 17,
        created_at: '2023-08-20T14:45:00Z',
        followers_count: 779,
        following_count: 279,
        lists_count: 9,
        draft_count: 2,
        is_user_following: true,
    },
    {
        user_id: 21,
        user_name: 'JacksonBrown',
        user_image: 'jackson_brown.jpg',
        bio: 'Exploring the boundaries of science and the marvels of the natural world.',
        post_count: 23,
        created_at: '2023-08-21T11:10:00Z',
        followers_count: 729,
        following_count: 176,
        lists_count: 11,
        draft_count: 0,
        is_user_following: false,
    },
    {
        user_id: 22,
        user_name: 'OliviaJohnson',
        user_image: 'olivia_johnson.jpg',
        bio: 'A journey through history, art, and the essence of human creativity.',
        post_count: 19,
        created_at: '2023-08-22T09:25:00Z',
        followers_count: 804,
        following_count: 389,
        lists_count: 8,
        draft_count: 1,
        is_user_following: true,
    },
    {
        user_id: 23,
        user_name: 'LiamMartinez',
        user_image: 'liam_martinez.jpg',
        bio: 'Embracing the melodies of life, one note at a time.',
        post_count: 25,
        created_at: '2023-08-23T13:30:00Z',
        followers_count: 888,
        following_count: 255,
        lists_count: 14,
        draft_count: 4,
        is_user_following: false,
    },
    {
        user_id: 24,
        user_name: 'IsabellaSmith',
        user_image: 'isabella_smith.jpg',
        bio: 'Exploring the world through the lenses of both science and art.',
        post_count: 20,
        created_at: '2023-08-24T10:10:00Z',
        followers_count: 728,
        following_count: 211,
        lists_count: 10,
        draft_count: 1,
        is_user_following: true,
    },
    {
        user_id: 25,
        user_name: 'MasonGarcia',
        user_image: 'mason_garcia.jpg',
        bio: 'Curiously unraveling the mysteries of the past and the present.',
        post_count: 18,
        created_at: '2023-08-25T12:25:00Z',
        followers_count: 692,
        following_count: 299,
        lists_count: 9,
        draft_count: 2,
        is_user_following: false,
    },
    {
        user_id: 26,
        user_name: 'EllaJohnson',
        user_image: 'ella_johnson.jpg',
        bio: 'Seeking inspiration in the ordinary, and finding beauty in simplicity.',
        post_count: 16,
        created_at: '2023-08-26T14:40:00Z',
        followers_count: 821,
        following_count: 184,
        lists_count: 7,
        draft_count: 0,
        is_user_following: true,
    },
    {
        user_id: 27,
        user_name: 'LucasBrown',
        user_image: 'lucas_brown.jpg',
        bio: 'In pursuit of knowledge and the harmonies of the universe.',
        post_count: 23,
        created_at: '2023-08-27T11:15:00Z',
        followers_count: 765,
        following_count: 266,
        lists_count: 11,
        draft_count: 3,
        is_user_following: false,
    },
    {
        user_id: 28,
        user_name: 'AriaMartinez',
        user_image: 'aria_martinez.jpg',
        bio: 'Weaving words into tapestries of imagination and creativity.',
        post_count: 27,
        created_at: '2023-08-28T09:30:00Z',
        followers_count: 844,
        following_count: 307,
        lists_count: 13,
        draft_count: 1,
        is_user_following: true,
    },
    {
        user_id: 29,
        user_name: 'LoganJohnson',
        user_image: 'logan_johnson.jpg',
        bio: 'In the realm of technology, exploring the wonders of the digital frontier.',
        post_count: 19,
        created_at: '2023-08-29T13:20:00Z',
        followers_count: 773,
        following_count: 202,
        lists_count: 10,
        draft_count: 2,
        is_user_following: false,
    },
    {
        user_id: 30,
        user_name: 'LilySmith',
        user_image: 'lily_smith.jpg',
        bio: 'Capturing emotions and stories through the lens of a camera.',
        post_count: 22,
        created_at: '2023-08-30T14:45:00Z',
        followers_count: 788,
        following_count: 298,
        lists_count: 12,
        draft_count: 0,
        is_user_following: true,
    },
]

const topicsList = [
    'technology,artificial intelligence,innovation,future',
    'travel,wanderlust,adventure,explore',
    'health,wellness,mindfulness,self-care',
    'history,ancient civilizations,archaeology,culture',
    'science,space exploration,astronomy,cosmos',
    'literature,books,reading,imagination',
    'music,art,creativity,expression',
    'food,cooking,cuisine,gastronomy',
    'nature,environment,ecology,sustainability',
    'sports,fitness,competition,athletics',
    'fashion,style,trends,design',
    'movies,film industry,entertainment,cinematic experiences',
    'education,learning,teaching,academic',
    'art,creativity,expression,culture',
    'psychology,mind,emotions,behavior',
    'technology,innovation,digital world,automation',
    'travel,adventure,wanderlust,exploration',
    'health,wellness,self-care,mindfulness',
    'history,culture,ancient civilizations,archaeology',
    'science,astronomy,cosmos,space exploration',
    'literature,books,imagination,reading',
    'music,creativity,expression,art',
    'food,cuisine,gastronomy,cooking',
    'nature,environment,sustainability,ecology',
    'sports,fitness,athletics,competition',
    'fashion,style,design,trends',
    'movies,entertainment,cinematic experiences,film industry',
    'education,learning,academic,teaching',
    'technology,future,innovation,artificial intelligence',
    'travel,explore,wanderlust,adventure',
    'health,self-care,wellness,mindfulness',
    'history,ancient civilizations,archaeology,culture',
    'science,cosmos,space exploration,astronomy',
    'literature,reading,books,imagination',
    'music,expression,creativity,art',
    'food,gastronomy,cooking,cuisine',
    'nature,sustainability,environment,ecology',
    'sports,competition,fitness,athletics',
    'fashion,design,style,trends',
    'movies,cinematic experiences,film industry,entertainment',
    'education,teaching,learning,academic',
    'mythology,culture,legends,folklore',
    'technology,innovation,artificial intelligence,future',
    'travel,adventure,wanderlust,explore',
    'health,wellness,self-care,mindfulness',
    'history,archaeology,ancient civilizations,culture',
    'science,astronomy,cosmos,space exploration',
    'literature,books,reading,imagination',
    'music,art,expression,creativity',
    'food,cuisine,gastronomy,cooking',
    'nature,environment,sustainability,ecology',
    'sports,fitness,competition,athletics',
    'fashion,style,trends,design',
    'movies,entertainment,cinematic experiences,film industry',
    'education,learning,academic,teaching',
    'meditation,mindfulness,inner peace,self-discovery',
    'waterfalls,nature,scenery,adventure',
    'hieroglyphs,ancient languages,culture,communication',
    'cinema,film genres,movies,entertainment',
    'microscopy,microorganisms,biology,science',
    'photography,art,light,creativity',
    'birdsong,nature,ornithology,soundscapes',
    'bonsai,horticulture,artistry,nature',
    'astronomy,celestial wonders,cosmos,night sky',
    'cuisine,gastronomy,food culture,flavors'
];

const returnRandomTopics = (count) => {
    const topicList = [];
    const individualTopicsList = [];
    topicsList.forEach(topics => {
        const individualTopics = topics.split(',');
        individualTopicsList.push(...individualTopics);
    });
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * individualTopicsList.length);
        const randomObject = individualTopicsList[randomIndex];
        topicList.push(randomObject);
    }

    return topicList;
}

const returnRandomPosts = (count) => {
    const postList = [];
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * dummyPost.length);
        const randomObject = dummyPost[randomIndex];
        postList.push(randomObject);
    }

    return postList;
}

export { dummyPost, dummyProfile, returnRandomPosts, returnRandomTopics };