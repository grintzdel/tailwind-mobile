export const GLASS_EFFECT = {
    container: 'bg-gray-600/20 backdrop-blur-sm',
    border: 'absolute inset-0 rounded-full p-[1px] transition-opacity duration-300 opacity-20',
    borderStyle: {
        background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 50%, rgba(255,255,255,0.03) 100%)',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        filter: 'blur(1px)'
    }
};

export const GRADIENT_BG = {
    className: 'bg-gradient-to-br from-[#8031f0] to-[#c231ed]',
    style: 'linear-gradient(to bottom right, #8031f0, #c231ed)',
    shadow: '0 8px 32px rgba(130, 49, 240, 0.4)'
};

export const ACTIVE_NAV_ITEM = {
    style: {
        boxShadow: GRADIENT_BG.shadow
    }
};