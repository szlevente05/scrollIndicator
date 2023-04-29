const div = document.querySelector('div');

window.addEventListener('scroll', () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    const scrolled = (scrollTop / (scrollHeight - clientHeight) * 100);
    div.style.width = `${scrolled}%`;
});