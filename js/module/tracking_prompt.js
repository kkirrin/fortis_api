export const initTrackingPrompt = () => {
    
    const tooltipTrigger = document.getElementById('tooltip-trigger');
    const tooltipContent = document.getElementById('tooltip-content');
    
    tooltipTrigger.addEventListener('mouseover', function() {
    tooltipContent.style.display = 'block';
    });
    tooltipTrigger.addEventListener('mouseout', function() {
    tooltipContent.style.display = 'none';
});
}