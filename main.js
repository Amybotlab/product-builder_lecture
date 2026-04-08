const translations = {
    ko: {
        title: "파트너십 문의",
        form_title: "파트너십 문의",
        form_name: "이름",
        form_email: "이메일",
        form_message: "메시지",
        form_submit: "보내기",
    },
    en: {
        title: "Partnership Inquiry",
        form_title: "Partnership Inquiry",
        form_name: "Your Name",
        form_email: "Your Email",
        form_message: "Message",
        form_submit: "Send",
    },
    zh: {
        title: "合作伙伴查询",
        form_title: "合作伙伴查询",
        form_name: "您的姓名",
        form_email: "您的电子邮件",
        form_message: "信息",
        form_submit: "发送",
    },
};

const changeLanguage = (lang) => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key];
    });
    document.documentElement.lang = lang;
};

document.querySelector('.language-switcher').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const lang = e.target.getAttribute('data-lang');
        changeLanguage(lang);
    }
});

// Set default language
changeLanguage('en');
