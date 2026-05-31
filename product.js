// Product Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initProductPage();
});

function initProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId) {
        loadProductData(productId);
    } else {
        // Default to first product if no ID provided
        loadProductData('10001');
    }
}

// Product Database
const productDatabase = {
    '10001': {
        id: '10001',
        title: { zh: '幾何木塊組合畫', en: 'Geometric Wood Block Art' },
        price: 'HKD 2,880',
        originalPrice: 'HKD 3,680',
        discount: '-22%',
        description: {
            zh: '這件作品採用優質天然木材，經過精密的切割與拼接工藝，創造出獨特的立體幾何效果。每一塊木頭都呈現出自然的紋理和色澤，為您的空間增添溫暖而有質感的藝術氣息。適合現代簡約、北歐風格或日式禪意的室內設計。',
            en: 'This piece uses premium natural wood, crafted through precise cutting and splicing techniques to create a unique three-dimensional geometric effect. Each block showcases natural texture and coloration, adding warm and textured artistic ambiance to your space. Perfect for modern minimalist, Nordic-style, or Japanese Zen interior design.'
        },
        specifications: {
            material: { zh: '天然實木 + 環保底板', en: 'Natural Solid Wood + Eco-friendly Backing' },
            dimensions: { zh: '60cm × 60cm × 3cm', en: '60cm × 60cm × 3cm' },
            style: { zh: '現代極簡 / 幾何藝術', en: 'Modern Minimalist / Geometric Art' },
            space: { zh: '客廳、臥室、書房、辦公室', en: 'Living Room, Bedroom, Study, Office' },
            installation: { zh: '壁掛式（含安裝配件）', en: 'Wall-mounted (includes hardware)' }
        },
        features: [
            { zh: '100% 天然實木製作', en: 'Made from 100% natural solid wood' },
            { zh: '手工精細打磨，觸感光滑', en: 'Hand-polished for smooth touch' },
            { zh: '環保無毒塗料處理', en: 'Treated with eco-friendly non-toxic coating' },
            { zh: '立體浮雕效果，層次分明', en: '3D embossed effect with clear layers' },
            { zh: '易於清潔保養', en: 'Easy to clean and maintain' }
        ],
        images: {
            main: 'images/10001.jpg',
            detail: 'images/100011.jpg'
        }
    },
    
    '10002': {
        id: '10002',
        title: { zh: '現代抽象拼貼畫廊', en: 'Modern Abstract Gallery Wall' },
        price: 'HKD 4,580',
        originalPrice: 'HKD 5,680',
        discount: '-19%',
        description: {
            zh: '這套組合畫廊將多種藝術元素完美融合，包括抽象圖案、人物肖像、幾何造型和自然元素。每幅作品都經過精心策劃，共同構建出一個充滿個性和故事性的視覺空間。是打造藝術氛圍牆面的理想選擇。',
            en: 'This gallery set perfectly blends multiple artistic elements including abstract patterns, portraits, geometric shapes, and natural elements. Each piece is carefully curated to create a visual space full of personality and storytelling. An ideal choice for creating an artistic wall atmosphere.'
        },
        specifications: {
            material: { zh: '高品質帆布 + 實木畫框', en: 'Premium Canvas + Solid Wood Frame' },
            dimensions: { zh: '組合尺寸約 200cm × 150cm', en: 'Combined size approx. 200cm × 150cm' },
            style: { zh: '當代藝術 / 拼貼風格', en: 'Contemporary Art / Collage Style' },
            space: { zh: '客廳、走廊、酒店大堂', en: 'Living Room, Corridor, Hotel Lobby' },
            installation: { zh: '分體式壁掛（含全套配件）', en: 'Individual wall mounting (full hardware included)' }
        },
        features: [
            { zh: '專業級印刷技術', en: 'Professional-grade printing technology' },
            { zh: '防紫外線褪色處理', en: 'UV-resistant fade treatment' },
            { zh: '可靈活調整佈局', en: 'Flexible layout arrangement' },
            { zh: '豐富的色彩層次', en: 'Rich color layers' },
            { zh: '完整的掛畫方案', en: 'Complete wall art solution' }
        ],
        images: {
            main: 'images/10002.jpg',
            detail: 'images/100021.jpg'
        }
    },
    
    '10003': {
        id: '10003',
        title: { zh: '立體馬賽克藝術牆', en: '3D Mosaic Art Wall' },
        price: 'HKD 3,280',
        originalPrice: 'HKD 4,180',
        discount: '-21%',
        description: {
            zh: '運用馬賽克技藝結合現代立體設計，這件作品展現了驚人的視覺深度。不同色彩和質地的材料交織在一起，形成動態而和諧的構圖。光線照射下會產生微妙的光影變化，讓作品在不同時間呈現不同的美感。',
            en: 'Combining mosaic craftsmanship with modern 3D design, this piece displays amazing visual depth. Materials of different colors and textures interweave to form a dynamic yet harmonious composition. Subtle light and shadow variations appear under different lighting, allowing the work to present different beauties throughout the day.'
        },
        specifications: {
            material: { zh: '複合材質馬賽克 + 背板', en: 'Composite Material Mosaic + Backing Board' },
            dimensions: { zh: '80cm × 80cm × 5cm', en: '80cm × 80cm × 5cm' },
            style: { zh: '現代藝術 / 立體裝飾', en: 'Modern Art / 3D Decorative' },
            space: { zh: '客廳、餐廳、商業空間', en: 'Living Room, Dining Room, Commercial Space' },
            installation: { zh: '強力膠或螺絲固定', en: 'Strong adhesive or screw fixing' }
        },
        features: [
            { zh: '真實的立體浮雕效果', en: 'Real 3D relief effect' },
            { zh: '豐富的材料質感', en: 'Rich material textures' },
            { zh: '隨光線變化的視覺效果', en: 'Visual effects that change with light' },
            { zh: '耐久性強，不易損壞', en: 'High durability, not easily damaged' },
            { zh: '獨特的手工藝術價值', en: 'Unique handicraft artistic value' }
        ],
        images: {
            main: 'images/10003.jpg',
            detail: 'images/100031.jpg'
        }
    },
    
    '10004': {
        id: '10004',
        title: { zh: '極簡紋理掛飾組合', en: 'Minimalist Texture Set' },
        price: 'HKD 2,380',
        originalPrice: 'HKD 3,080',
        discount: '-23%',
        description: {
            zh: '以「少即是多」的設計理念，這組作品通過精緻的表面紋理來傳達美學。簡潔的線條、柔和的色調、以及精心挑選的天然材質，共同營造出寧靜而高雅的氛圍。極簡而不簡單，每一處細節都值得品味。',
            en: 'Based on the design philosophy of "less is more," this collection conveys aesthetics through exquisite surface textures. Clean lines, soft tones, and carefully selected natural materials together create a serene and elegant atmosphere. Minimalist but not simple, every detail deserves appreciation.'
        },
        specifications: {
            material: { zh: '天然石材紋理 + 木框', en: 'Natural Stone Texture + Wooden Frame' },
            dimensions: { zh: '四件套：50cm×50cm 每件', en: 'Set of 4: 50cm×50cm each' },
            style: { zh: '極簡主義 / 日式禪意', en: 'Minimalism / Japanese Zen' },
            space: { zh: '臥室、茶室、瑜伽房', en: 'Bedroom, Tea Room, Yoga Studio' },
            installation: { zh: '無痕釘固定方式', en: 'Damage-free nail fixing method' }
        },
        features: [
            { zh: '真正的極簡美學設計', en: 'True minimalist aesthetic design' },
            { zh: '天然的紋理美感', en: 'Natural textural beauty' },
            { zh: '舒緩心情的視覺效果', en: 'Visually soothing effects' },
            { zh: '百搭的配色方案', en: 'Versatile color scheme' },
            { zh: '輕鬆提升空間格調', en: 'Easily elevate space style' }
        ],
        images: {
            main: 'images/10004.jpg',
            detail: 'images/100041.jpg'
        }
    },
    
    '10005': {
        id: '10005',
        title: { zh: '圓形球體立體畫', en: 'Spherical 3D Artwork' },
        price: 'HKD 1,980',
        originalPrice: 'HKD 2,580',
        discount: '-23%',
        description: {
            zh: '圓潤的造型語言賦予這件作品親和力與溫暖感。規則排列的球體元素形成有節奏的視覺韻律，同時立體的表現手法增加了作品的趣味性和互動性。柔和的中性色調使其能夠融入各種室內風格。',
            en: 'The rounded form language gives this artwork approachability and warmth. The regularly arranged spherical elements create a rhythmic visual pattern, while the 3D expression adds playfulness and interactivity to the piece. Soft neutral tones allow it to blend into various interior styles.'
        },
        specifications: {
            material: { zh: '樹脂球體 + 高密度板', en: 'Resin Spheres + High-density Board' },
            dimensions: { zh: '60cm × 60cm × 4cm', en: '60cm × 60cm × 4cm' },
            style: { zh: '現代簡約 / 有機形態', en: 'Modern Simplistic / Organic Form' },
            space: { zh: '兒童房、客廳、休閒區', en: "Children's Room, Living Room, Lounge Area" },
            installation: { zh: '標準壁掛安裝', en: 'Standard wall mounting' }
        },
        features: [
            { zh: '獨特的圓形元素設計', en: 'Unique circular element design' },
            { zh: '親和友好的視覺感受', en: 'Friendly and approachable visual feel' },
            { zh: '豐富的立體層次', en: 'Rich 3D layers' },
            { zh: '安全環保材料', en: 'Safe and eco-friendly materials' },
            { zh: '適合家庭環境使用', en: 'Suitable for home environments' }
        ],
        images: {
            main: 'images/10005.jpg',
            detail: 'images/100051.jpg'
        }
    },
    
    '10006': {
        id: '10006',
        title: { zh: '花卉剪影藝術框', en: 'Floral Silhouette Frame' },
        price: 'HKD 1,680',
        originalPrice: 'HKD 2,180',
        discount: '-23%',
        description: {
            zh: '將自然的優美融入現代設計，這件花卉剪影作品以簡練的線條捕捉植物的生機。深色的背景與白色的剪影形成強烈對比，既具有裝飾性又不失藝術性。為空間注入一抹自然詩意。',
            en: 'Incorporating natural beauty into modern design, this floral silhouette piece captures the vitality of plants with concise lines. The dark background creates strong contrast with the white silhouettes, both decorative and artistic. Injects a touch of natural poetry into the space.'
        },
        specifications: {
            material: { zh: '高密度纖維板 + 金屬框', en: 'High-density Fiberboard + Metal Frame' },
            dimensions: { zh: '70cm × 90cm × 2cm', en: '70cm × 90cm × 2cm' },
            style: { zh: '北歐風格 / 自然主義', en: 'Nordic Style / Naturalism' },
            space: { zh: '臥室、浴室、陽台', en: 'Bedroom, Bathroom, Balcony' },
            installation: { zh: '橫豎兩向可調整', en: 'Adjustable horizontal or vertical orientation' }
        },
        features: [
            { zh: '優美的植物剪影圖案', en: 'Beautiful plant silhouette patterns' },
            { zh: '強烈的黑白對比效果', en: 'Strong black and white contrast effect' },
            { zh: '自然元素的現代演繹', en: 'Modern interpretation of natural elements' },
            { zh: '易於搭配的設計', en: 'Easy to match design' },
            { zh: '清新雅致的裝飾效果', en: 'Fresh and elegant decorative effect' }
        ],
        images: {
            main: 'images/10006.jpg',
            detail: 'images/100061.jpg'
        }
    },
    
    '10007': {
        id: '10007',
        title: { zh: '波紋紋理立體畫', en: 'Ripple Texture 3D Art' },
        price: 'HKD 2,580',
        originalPrice: 'HKD 3,380',
        discount: '-24%',
        description: {
            zh: '受水波紋啟發的設計，這件作品以流暢的曲線和漸變的層次模擬水面波動的美感。立體的起伏不僅帶來視覺上的享受，更在光影下產生微妙的變化，如同真實的水面般富有生命力。',
            en: 'Inspired by water ripples, this piece uses flowing curves and gradual layers to simulate the beauty of undulating water surfaces. The three-dimensional undulations not only provide visual pleasure but also create subtle changes under light and shadow, as lifelike as real water surfaces.'
        },
        specifications: {
            material: { zh: '環保樹脂 + 木材複合', en: 'Eco-friendly Resin + Wood Composite' },
            dimensions: { zh: '90cm × 60cm × 6cm', en: '90cm × 60cm × 6cm' },
            style: { zh: '流動藝術 / 現代雕塑', en: 'Flow Art / Modern Sculpture' },
            space: { zh: '客廳、辦公室、接待區', en: 'Living Room, Office, Reception Area' },
            installation: { zh: '隱藏式掛架系統', en: 'Concealed hanging system' }
        },
        features: [
            { zh: '動態的波紋視覺效果', en: 'Dynamic ripple visual effect' },
            { zh: '隨角度變化的觀賞體驗', en: 'Viewing experience that changes with angle' },
            { zh: '精湛的立體工藝', en: 'Exquisite 3D craftsmanship' },
            { zh: '獨特的藝術表現形式', en: 'Unique artistic expression' },
            { zh: '引人注目的焦點裝飾', en: 'Eye-catching focal point decoration' }
        ],
        images: {
            main: 'images/10007.jpg',
            detail: 'images/100071.jpg'
        }
    },
    
    '10008': {
        id: '10008',
        title: { zh: '北歐風格組合畫', en: 'Nordic Style Collection' },
        price: 'HKD 3,980',
        originalPrice: 'HKD 5,080',
        discount: '-22%',
        description: {
            zh: '汲取斯堪的納維亞設計精髓，這套作品以簡潔的線條、自然的色調和功能性美學為核心。融合了風景畫、抽象圖案和幾何元素，營造出清新淡雅且充滿生活智慧的居家氛圍。讓家成為放鬆心靈的港灣。',
            en: 'Drawing from Scandinavian design essence, this collection centers on clean lines, natural tones, and functional aesthetics. Blending landscape paintings, abstract patterns, and geometric elements to create a fresh, elegant living atmosphere filled with life wisdom. Make your home a harbor for relaxing the soul.'
        },
        specifications: {
            material: { zh: '藝術微噴 + 實木內框', en: 'Art Giclée Print + Solid Wood Inner Frame' },
            dimensions: { zh: '組合尺寸約 180cm × 120cm', en: 'Combined size approx. 180cm × 120cm' },
            style: { zh: '北歐風格 / 斯堪的納維亞', en: 'Nordic Style / Scandinavian' },
            space: { zh: '客廳、臥室、樣板間', en: 'Living Room, Bedroom, Showroom' },
            installation: { zh: '專業級安裝套件', en: 'Professional-grade installation kit' }
        },
        features: [
            { zh: '正宗北歐設計風格', en: 'Authentic Nordic design style' },
            { zh: '舒緩的自然色調', en: 'Soothing natural color palette' },
            { zh: '多功能組合可能性', en: 'Multi-functional combination possibilities' },
            { zh: '高品質藝術印刷', en: 'High-quality art printing' },
            { zh: '提升居住幸福感', en: 'Enhances living happiness' }
        ],
        images: {
            main: 'images/10008.jpg',
            detail: 'images/100081.jpg'
        }
    }
};

function loadProductData(productId) {
    const product = productDatabase[productId];
    
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }
    
    // Update page content
    updateProductContent(product);
    loadRelatedProducts(productId);
    
    // Update URL without reload
    if (history.pushState) {
        const newUrl = `${window.location.pathname}?id=${productId}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    }
}

function updateProductContent(product) {
    const lang = window.JanuarySite ? window.JanuarySite.getCurrentLanguage() : 'zh';
    
    // Update breadcrumb
    document.getElementById('breadcrumbProduct').textContent = product.title[lang];
    
    // Update main image
    document.getElementById('mainImage').src = product.images.main;
    document.getElementById('thumbMain').src = product.images.main;
    document.getElementById('thumbDetail').src = product.images.detail;
    
    // Update title
    document.getElementById('productTitle').textContent = product.title[lang];
    
    // Update pricing
    document.getElementById('productPrice').textContent = product.price;
    document.getElementById('productOriginalPrice').textContent = product.originalPrice;
    document.getElementById('productDiscount').textContent = product.discount;
    
    // Update description
    document.getElementById('productDescription').textContent = product.description[lang];
    
    // Update specifications
    document.getElementById('specMaterial').textContent = product.specifications.material[lang];
    document.getElementById('specDimensions').textContent = product.specifications.dimensions[lang];
    document.getElementById('specStyle').textContent = product.specifications.style[lang];
    document.getElementById('specSpace').textContent = product.specifications.space[lang];
    document.getElementById('specInstallation').textContent = product.specifications.installation[lang];
    
    // Update features list
    const featuresList = document.getElementById('productFeatures');
    featuresList.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.className = 'flex items-start space-x-3 text-gray-600 dark:text-gray-300';
        li.innerHTML = `
            <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span>${feature[lang]}</span>
        `;
        featuresList.appendChild(li);
    });
    
    // Update page title
    const title = document.querySelector('title');
    if (title) {
        title.textContent = `${product.title[lang]} | January`;
    }
}

function loadRelatedProducts(currentProductId) {
    const relatedContainer = document.getElementById('relatedProducts');
    const lang = window.JanuarySite ? window.JanuarySite.getCurrentLanguage() : 'zh';
    
    // Get related products (exclude current)
    const relatedIds = Object.keys(productDatabase).filter(id => id !== currentProductId).slice(0, 4);
    
    relatedContainer.innerHTML = '';
    
    relatedIds.forEach(id => {
        const product = productDatabase[id];
        const card = document.createElement('a');
        card.href = `product.html?id=${id}`;
        card.className = 'product-card group block';
        
        card.innerHTML = `
            <div class="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-700 aspect-[3/4]">
                <img src="${product.images.main}" alt="${product.title[en]}" 
                     class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                     loading="lazy">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button class="w-full bg-white/95 hover:bg-white text-gray-900 py-2 rounded-lg font-medium text-sm">查看詳情</button>
                </div>
            </div>
            <div class="mt-3 px-1">
                <h3 class="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-wood-600 dark:group-hover:text-wood-300 transition-colors line-clamp-2">${product.title[lang]}</h3>
                <p class="text-xs text-wood-600 dark:text-wood-300 font-medium mt-1">${product.price}</p>
            </div>
        `;
        
        relatedContainer.appendChild(card);
    });
}

// Image Gallery Functions
let currentImageView = 'main';

function changeImage(view) {
    const productId = new URLSearchParams(window.location.search).get('id') || '10001';
    const product = productDatabase[productId];
    
    if (!product) return;
    
    // Update main image
    const mainImage = document.getElementById('mainImage');
    const lightboxImage = document.getElementById('lightboxImage');
    
    if (view === 'main') {
        mainImage.src = product.images.main;
        lightboxImage.src = product.images.main;
    } else {
        mainImage.src = product.images.detail;
        lightboxImage.src = product.images.detail;
    }
    
    currentImageView = view;
    
    // Update thumbnail active state
    document.querySelectorAll('.thumbnail-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.classList.remove('border-wood-600', 'dark:border-wood-400');
        btn.classList.add('border-transparent');
    });
    
    event.currentTarget.classList.add('active');
    event.currentTarget.classList.remove('border-transparent');
    event.currentTarget.classList.add('border-wood-600', 'dark:border-wood-400');
}

// Lightbox Functions
function openLightbox() {
    const lightbox = document.getElementById('lightbox');
    const productId = new URLSearchParams(window.location.search).get('id') || '10001';
    const product = productDatabase[productId];
    
    if (!product) return;
    
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = currentImageView === 'main' ? product.images.main : product.images.detail;
    
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
}

// Close lightbox on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Handle browser back/forward
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.path) {
        const urlParams = new URLSearchParams(event.state.path.split('?')[1]);
        const productId = urlParams.get('id');
        if (productId) {
            loadProductData(productId);
        }
    }
});