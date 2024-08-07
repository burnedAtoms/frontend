import { useEffect, useRef } from 'react'

function Note() {
    const personalQuote = useRef(null);
    useEffect(() => {
        const quoteContainer:HTMLSpanElement = personalQuote.current!;
        if (!quoteContainer) return;

        const text = quoteContainer.innerText;
        const radius = 50;  // Radius in pixels where the color will change

        quoteContainer.innerHTML = [...text].map(char => `<span>${char}</span>`).join('');

        const mouseMoveHandler = (e:MouseEvent) => {
            const {clientX: mouseX, clientY: mouseY} = e;
            Array.from(quoteContainer.children).forEach((span:HTMLElement | Element) => {
                const {x, y} = span.getBoundingClientRect();
                const dx = mouseX - (x + ((span as HTMLElement).offsetWidth) / 2);
                const dy = mouseY - (y + (span as HTMLElement).offsetHeight / 2);
                const distance = Math.sqrt(dx * dx + dy * dy);
                if(distance < radius){
                    span.className = "quote-color";
                } else{
                    span.className = "";
                }
            });
        };

        const mouseLeaveHandler = () => {
            Array.from(quoteContainer.children).forEach(span => {
                span.className = 'text-white';
            });
        };

        quoteContainer.addEventListener('mousemove', mouseMoveHandler);
        quoteContainer.addEventListener('mouseleave', mouseLeaveHandler);

        return () => {
            quoteContainer.removeEventListener('mousemove', mouseMoveHandler);
            quoteContainer.removeEventListener('mouseleave', mouseLeaveHandler);
        };
    }, []);

    return (
        <div id="note-container" className="relative h-full max-lg:mt-16 lg:top-[calc(50vh)] left-auto flex-col items-start">
            <div id="icon-quote-container" className="px-6 w-full flex justify-between items-center">
                <span className="flex justify-start max-w-16 aspect-square"><img src="http://localhost:5173/src/assets/web/icon_quote_open.svg" alt="" /></span>
                <span className="flex justify-end max-w-16 aspect-square"><img src="http://localhost:5173/src/assets/web/icon_quote_close.svg" alt="" /></span>
            </div>
            <h1  ref={personalQuote} id="personal-quote" className="quote-text">
                The best way to predict the future is to create it.
            </h1>
            <span>- Abraham Lincoln</span>
        </div>
    )
}

export default Note;