document.addEventListener('DOMContentLoaded', () => {
    const timelineContainer = document.getElementById('timeline-container');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const modalTitle = document.getElementById('modal-title');
    const modalYear = document.getElementById('modal-year');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.querySelector('.close-modal');

    // Lightbox Elements
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <span class="close-lightbox">&times;</span>
        <img class="lightbox-content" id="lightbox-img">
        <div id="caption"></div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('caption');
    const closeLightbox = document.querySelector('.close-lightbox');

    // Render Timeline
    timelineData.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'timeline-item';
        div.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <span class="year-badge">${item.year}</span>
                <h2>${item.title}</h2>
                <p>${item.shortDescription}</p>
                <button class="read-more-btn" onclick="openModal('${item.id}')">
                    Explorar Etapa <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
        timelineContainer.appendChild(div);
    });

    // Scroll Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.timeline-item').forEach(item => observer.observe(item));

    // Open Modal
    window.openModal = (id) => {
        const data = timelineData.find(d => d.id === id);
        if (!data) return;

        modalTitle.innerText = data.title;
        modalYear.innerText = data.year;
        modalImg.src = data.headerImage;

        // Build Content (Continuous Text + Gallery + Audio)
        let contentHTML = `<div class="text-content">${data.fullDescription}</div>`;

        // Audio Section
        if (data.audio) {
            contentHTML += `
                <div class="audio-section">
                    <h3><i class="fas fa-headphones"></i> ${data.audio.title}</h3>
                    <audio controls class="custom-audio">
                        <source src="${data.audio.src}" type="audio/mpeg">
                        Tu navegador no soporta el elemento de audio.
                    </audio>
                </div>
            `;
        }

        // Gallery Section
        if (data.gallery && data.gallery.length > 0) {
            contentHTML += `
                <div class="gallery-section">
                    <h3><i class="fas fa-images"></i> Galería Histórica</h3>
                    <div class="gallery-grid">
                        ${data.gallery.map(img => `
                            <div class="gallery-item">
                                <img src="${img.src}" alt="${img.caption}" onclick="openLightbox('${img.src}', '${img.caption}')">
                                <p class="gallery-caption">${img.caption}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // Quiz Section
        if (data.quiz && data.quiz.length > 0) {
            contentHTML += `
                <div class="quiz-container">
                    <div class="quiz-header">
                        <h3><i class="fas fa-graduation-cap"></i> Evaluación de Conocimientos</h3>
                        <p>Responde a las preguntas para desbloquear tu calificación final.</p>
                    </div>
                    <div class="quiz-grid" id="quiz-grid-${id}">
                        ${data.quiz.map((q, i) => `
                            <div class="question-card" data-correct="${q.correct}">
                                <div class="question-text">${i + 1}. ${q.question}</div>
                                <div class="options-list">
                                    ${q.options.map((opt, optIdx) => `
                                        <button class="option-btn" onclick="checkAnswer(this, ${optIdx}, ${q.correct}, '${id}')">
                                            ${opt}
                                        </button>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div id="score-panel-${id}" class="quiz-score-panel">
                        <div class="score-title">Resultado Final</div>
                        <span class="score-value" id="score-value-${id}">0/10</span>
                        <p class="score-feedback" id="score-feedback-${id}"></p>
                    </div>
                </div>
            `;
        }

        modalBody.innerHTML = contentHTML;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Reset quiz state
        window.quizState = { total: data.quiz.length, answered: 0, correct: 0 };
    };

    // Close Modal
    closeModal.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        // Stop audio if playing
        const audios = document.querySelectorAll('audio');
        audios.forEach(audio => audio.pause());
    };

    window.onclick = (e) => {
        if (e.target == modal) closeModal.onclick();
        if (e.target == lightbox) closeLightbox.onclick();
    };

    // Lightbox Logic
    window.openLightbox = (src, caption) => {
        lightbox.style.display = "block";
        lightboxImg.src = src;
        captionText.innerHTML = caption;
    };

    closeLightbox.onclick = () => {
        lightbox.style.display = "none";
    };

    // Quiz Logic
    window.checkAnswer = (btn, selectedIdx, correctIdx, modalId) => {
        const parent = btn.parentElement;
        if (parent.classList.contains('answered')) return;
        parent.classList.add('answered');

        const allBtns = parent.querySelectorAll('.option-btn');

        if (selectedIdx === correctIdx) {
            btn.classList.add('correct');
            window.quizState.correct++;
        } else {
            btn.classList.add('incorrect');
            allBtns[correctIdx].classList.add('correct');
        }

        window.quizState.answered++;

        if (window.quizState.answered === window.quizState.total) {
            showScore(modalId);
        }
    };

    function showScore(id) {
        const panel = document.getElementById(`score-panel-${id}`);
        const value = document.getElementById(`score-value-${id}`);
        const feedback = document.getElementById(`score-feedback-${id}`);

        const score = window.quizState.correct;
        const total = window.quizState.total;
        const percentage = (score / total) * 100;

        value.innerText = `${score}/${total}`;

        if (percentage === 100) {
            feedback.innerText = "¡Matrícula de Honor! Eres un experto en la historia del instituto.";
        } else if (percentage >= 80) {
            feedback.innerText = "¡Sobresaliente! Conoces muy bien los detalles.";
        } else if (percentage >= 50) {
            feedback.innerText = "Aprobado. Tienes buenos conocimientos generales.";
        } else {
            feedback.innerText = "Necesitas mejorar. ¡Lee los textos de nuevo y vuelve a intentarlo!";
        }

        panel.style.display = 'block';
        panel.scrollIntoView({ behavior: 'smooth' });
    }
});
