// smoothScroll.js
export default function smoothScroll(node) {
    node.addEventListener('click', (event) => {
        event.preventDefault();
        let sectionId = event.target.getAttribute('href');
        let sectionPosition = document.querySelector(sectionId).offsetTop;
        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });
    });

    return {
        destroy() {
            node.removeEventListener('click');
        }
    };
}
