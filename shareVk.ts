interface shareVkParams {
    url: string;
    title?: string;
    image?: string;
}

const shareVk = ({ title, image, url }: shareVkParams) => {
    const params = new URLSearchParams({
        url,
        ...(title ? { title } : {}),
        ...(image ? { image } : {})
    });

    const newTabUrl = `https://vk.com/share.php?${params}`;

    window.open(newTabUrl, '_blank', 'noopener noreferrer');
};

export default shareVk;
