const initialData = [
    {
        id: 'apple',
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                name: 'Вика',
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                name: 'Александр',
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        id: 'samsung',
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                name: 'Сергей',
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        id: 'sony',
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                name: 'Мария',
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];
const feedbackSection = document.querySelector('.reviews');
const sectionTitle = document.querySelector('.reviews-title');
const reviewsProduct = document.querySelector('.reviews-products');
const radios = document.querySelectorAll('input[type=radio]');
const nameInput = document.querySelector(`[name="first-name"]`)
const textArea = document.querySelector('.textarea')
const errorCommentProduct = document.querySelector('.errcomment-product');
const errorCommentName = document.querySelector('.errcomment-name');
const errorCommentText = document.querySelector('.errcomment-text');
let userId = 4;

radios.forEach(radio => radio.addEventListener('change', () => {
    if (radio.checked) {
        hideReviews();
        showAllReviews(radio.value);
    }
}));

function hideReviews() {
    while (reviewsProduct.firstChild) {
        reviewsProduct.removeChild(reviewsProduct.firstChild);
    }
}

function showAllReviews(radio) {
    const chosenProduct = radio;
    console.log(chosenProduct);
    
    initialData.forEach((review) => {
        if (chosenProduct === review.id) {

            sectionTitle.textContent = review.product;
            feedbackSection.append(sectionTitle);

            for (let i = 0; i < review.reviews.length; i++) {
                const element = review.reviews[i];

                const reviewItem = document.createElement('div');
                reviewItem.classList.add('reviews-product');

                const reviewUser = document.createElement('p');
                reviewUser.classList.add('review-user')
                reviewUser.textContent = 'Покупатель: ' + element.name;

                const reviewText = document.createElement('p');
                reviewText.classList.add('review-text');
                reviewText.textContent =  element.text;

                reviewItem.append(reviewUser);
                reviewItem.append(reviewText);
                reviewsProduct.append(reviewItem);
                feedbackSection.append(reviewsProduct);
            }
        }
    });
}

function clearForm() {
    nameInput.value = '';
    textArea.value = '';
}

function getNameCheck() {
    const checkName = document.querySelector(`[name="first-name"]`).value;
    try {
        
        if (checkName === '') {
            errorCommentName.textContent = 'Укажите имя!'
            throw new Error('Укажите имя!');
        }
        errorCommentName.textContent = '';
        return checkName;
    } catch (error) {
        console.error(error.message);
    }
}

function getCheckedProduct() {
    const selectedProduct = document.querySelector('input[name="option"]:checked');
    try {
        errorCommentProduct.textContent = '';
        let checkedProduct;
        if (!selectedProduct) {
            errorCommentProduct.textContent = 'Выберите товар';
            throw new Error('Выберите товар');
        }
        checkedProduct = selectedProduct.value;
        return checkedProduct;
    } catch (error) {
        console.error(error.message);
    }
}

function textCheck() {
    const textArea = document.querySelector('.textarea').value;
    try {
        errorCommentText.textContent = ''
        if (textArea.length < 50) {
            errorCommentText.textContent = 'Длина отзыва должна быть не менее 50 символов'
            throw new Error('Комментарий слишком короткий');
        }
        else if (textArea.length > 500) {
            errorCommentText.textContent = 'Длина отзыва должна быть не более 500 символов'
            throw new Error('Комментарий слишком длинный');
        } else {
            return textArea;
        }
    } catch (error) {
        console.error(error.message);
    }
}

function saveReview(review) {
    const currentReview = review;
    const productName = getCheckedProduct();

    for (const reviewItem of initialData) {
        if (reviewItem.id === productName) {
            reviewItem.reviews.push(currentReview);
        }
    }
}

function createReview(review) {
    const reviewItem = document.createElement('div');
    reviewItem.classList.add('reviews-product');

    const reviewUser = document.createElement('p');
    reviewUser.classList.add('review-user')
    reviewUser.textContent = 'Покупатель: ' + review.name;

    const reviewText = document.createElement('p');
    reviewText.textContent = review.text;

    reviewItem.append(reviewUser);
    reviewItem.append(reviewText);
    reviewsProduct.append(reviewItem);
}

function postReview(product, name, text) {
    if (product && name && text) {
        let newReview = {
            id: ++userId,
            name: name,
            text: text
        }
        createReview(newReview);
        saveReview(newReview);
    }
}

btn.addEventListener("click", (event) => {
    event.preventDefault();

    let productName = getCheckedProduct();
    let userName = getNameCheck();
    let textReview = textCheck();

    postReview(productName, userName, textReview);
    clearForm();
});
