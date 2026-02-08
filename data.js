// بيانات المراحل الدراسية مع الدروس التفصيلية
const stagesData = [
    {
        id: 1,
        name: 'الثالث المتوسط',
        icon: '<i class="fa-solid fa-3"></i>',
        semesters: [
            {
                id: 1,
                name: 'الفصل الأول',
                playlist: 'https://youtu.be/WPpjhwHStIw?si=ZoJpaOZEkgndneKQ',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الأول للثالث المتوسط',
                examLink: 'https://youtube.com/watch?v=exam1',
                lessons: [
                    {
                        id: 1,
                        name: 'الحلقة 1',
                        videoLink: 'https://youtu.be/WPpjhwHStIw?si=ZoJpaOZEkgndneKQ'
                    },
                    {
                        id: 2,
                        name: 'الحلقة 2',
                        videoLink: 'https://youtu.be/S8-VKY8exkQ?si=lcMhwNjcYTvff046'
                    },
                    {
                        id: 3,
                        name: 'الحلقة 3',
                        videoLink: 'https://youtu.be/a70FxI11axE?si=1NFQcUcLGC8Qn6A1'
                    },
                    {
                        id: 4,
                        name: 'الحلقة 4',
                        videoLink: 'https://youtu.be/KTouR7Pa_fQ?si=Ml3LnZnelU_IRBRc'
                    },
                    {
                        id: 5,
                        name: 'الحلقة 5',
                        videoLink: 'https://youtu.be/_Ws12iljiNI?si=0PScF9Z2HXZEFL84'
                    },
                    {
                        id: 6,
                        name: 'الحلقة 6',
                        videoLink: 'https://youtu.be/_8cp6pplCEs?si=LLiBfAbcC2Rki-Q1'
                    },
                    {
                        id: 7,
                        name: 'الحلقة 7',
                        videoLink: 'https://youtu.be/l5IYFWdPMw8?si=JzUl_PlSmn4YlLBw'
                    },
                    {
                        id: 8,
                        name: 'الحلقة 8',
                        videoLink: 'https://youtu.be/GW-hkT3MWf0?si=2cyGh4qLQbdPV9JI'
                    }
                ]
            },
            {
                id: 2,
                name: 'الفصل الثاني',
                playlist: 'https://youtu.be/maeJussxmIU?si=BNI2iCS7FDgjdUUo',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الثاني للثالث المتوسط',
                examLink: 'https://youtube.com/watch?v=exam2',
                lessons: [
                    {
                        id: 1,
                        name: 'الحلقة 1',
                        videoLink: 'https://youtu.be/maeJussxmIU?si=BNI2iCS7FDgjdUUo'
                    },
                    {
                        id: 2,
                        name: 'الحلقة 2',
                        videoLink: 'https://youtu.be/qD_HxNfasoU?si=Gssz5FcYqXQA65ca'
                    },
                    {
                        id: 3,
                        name: 'الحلقة 3',
                        videoLink: 'https://youtu.be/NBh4-MVdLjM?si=6F2lZZpzPLr9QNhx'
                    },
                ]
            },
            {
                id: 3,
                name: 'الفصل الثالث',
                playlist: 'https://youtu.be/fcMgXkwuDgA?si=A1oDeXtVb5HV-6rG',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الثاني للثالث المتوسط',
                examLink: 'https://youtube.com/watch?v=exam2',
                lessons: [
                    {
                        id: 1,
                        name: 'الحلقة 1',
                        videoLink: 'https://youtu.be/fcMgXkwuDgA?si=A1oDeXtVb5HV-6rG'
                    },
                    {
                        id: 2,
                        name: 'الحلقة 2',
                        videoLink: 'https://youtu.be/zCZTwjbc7rY?si=KD0hHuyY6BQANb6f'
                    },
                    {
                        id: 3,
                        name: 'الحلقة 3',
                        videoLink:  'https://youtu.be/ufuQOgWXd28?si=li9oSYP99Xa8WVgz'
                    },
                    {
                        id: 4,
                        name: 'الحلقة 4',
                        videoLink: 'https://youtu.be/Ap7H3VuAh0o?si=CfVDOx33Lz3ruBC2'
                    },
                    {
                        id: 5,
                        name: 'الحلقة 5',
                        videoLink: 'https://youtu.be/ufuQOgWXd28?si=BmCr1mZvuIaGm9Be'
                    },
                    {
                        id: 6,
                        name: 'الحلقة 6',
                        videoLink: 'https://youtu.be/1aGUswt79QQ?si=aQf3m5VxoBN14Zx_'
                    },
                    {
                        id: 7,
                        name: 'الحلقة 7',
                        videoLink: 'https://youtu.be/nwPUcMdMCuo?si=rkiA_mpK4nN8K6KB'
                    },
                    {
                        id: 8,
                        name: 'الحلقة 8',
                        videoLink: 'https://youtu.be/IPWVsSbrF50?si=vIOylbbExf_iezH6'
                    },
                ]
            },
            {
                id: 4,
                name: 'الفصل الرابع',
                playlist: 'https://youtu.be/ziX6Aj2KD10?si=PyOqbI21j5IdnO45',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الثاني للثالث المتوسط',
                examLink: 'https://youtube.com/watch?v=exam2',
                lessons: [
                    {
                        id: 1,
                        name: 'الحلقة 1',
                        videoLink: 'https://youtu.be/ziX6Aj2KD10?si=PyOqbI21j5IdnO45'
                    },
                ]
            }
        ]
    },





















    
    {
        id: 2,
        name: 'الرابع العلمي',
        icon: '<i class="fa-solid fa-4"></i>',
        semesters: [
            {
                id: 1,
                name: 'الفصل الأول',
                playlist: 'https://youtube.com/playlist?list=PLxxxxxx3',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الأول للرابع العلمي',
                examLink: 'https://youtube.com/watch?v=exam3',
                lessons: [
                    {
                        id: 1,
                        name: 'الحلقة 1',
                        videoLink: 'https://youtube.com/watch?v=lesson3-1'
                    },
                    {
                        id: 2,
                        name: 'الحلقة 2',
                        videoLink: 'https://youtube.com/watch?v=lesson3-2'
                    },
                    {
                        id: 3,
                        name: ' الحلقة 3',
                        videoLink: 'https://youtube.com/watch?v=lesson3-3'
                    },
                    {
                        id: 4,
                        name: 'الحلقة 4',
                        videoLink: 'https://youtube.com/watch?v=lesson3-4'
                    },
                    {
                        id: 5,
                        name: 'الحلقة 5',
                        videoLink: 'https://youtube.com/watch?v=lesson3-5'
                    }
                ]
            },
            {
                id: 2,
                name: 'الفصل الثاني',
                playlist: 'https://youtube.com/playlist?list=PLxxxxxx4',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الثاني للرابع العلمي',
                examLink: 'https://youtube.com/watch?v=exam4',
                lessons: [
                    {
                        id: 1,
                        name: '  الحلقة 1',
                        videoLink: 'https://youtube.com/watch?v=lesson4-1'
                    },
                    {
                        id: 2,
                        name: ' الحلقة 2',
                        videoLink: 'https://youtube.com/watch?v=lesson4-2'
                    },
                    {
                        id: 3,
                        name: ' الحلقة 3',
                        videoLink: 'https://youtube.com/watch?v=lesson4-3'
                    },
                    {
                        id: 4,
                        name: 'الحلقة 4',
                        videoLink: 'https://youtube.com/watch?v=lesson4-4'
                    }
                ]
            }
        ]
    },
















    {
        id: 3,
        name: 'الخامس العلمي',
        icon: '<i class="fa-solid fa-5"></i>',
        semesters: [
            {
                id: 1,
                name: 'الفصل الأول',
                playlist: 'https://youtu.be/uTa0n3Asjp0?si=v9COMuoL74ULavPt',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الأول للخامس العلمي',
                examLink: 'https://youtube.com/watch?v=exam5',
                lessons: [
                    {
                        id: 1,
                        name: 'الحلقة 1',
                        videoLink: 'https://youtu.be/uTa0n3Asjp0?si=QIRiWTJCHsLZA93i'
                    },
                    {
                        id: 2,
                        name: 'الحلقة 2',
                        videoLink: 'https://youtu.be/Xa5yqA85MrY?si=qc1BxEnfowtT1tU-'
                    },
                    {
                        id: 3,
                        name: 'الحلقة 3',
                        videoLink: 'https://youtu.be/e08fokgoVdc?si=x2kQDapfqwUz44dW'
                    },
                    
                ]
            },
            {
                id: 2,
                name: 'الفصل الثاني',
                playlist: 'https://youtu.be/C31iKwP2QEg?si=qM9I2eL_7eP3kdzY',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الثاني للخامس العلمي',
                examLink: 'https://youtube.com/watch?v=exam6',
                lessons: [
                    {
                        id: 1,
                        name: 'الحلقة 1',
                        videoLink: 'https://youtu.be/C31iKwP2QEg?si=qM9I2eL_7eP3kdzY'
                    },
                ]
            },
            {
                id: 3,
                name: 'الفصل الثالث',
                playlist: 'https://youtu.be/aStTnpSd5J0?si=8LuuZZoM7J6dFGO0',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الثاني للخامس العلمي',
                examLink: 'https://youtube.com/watch?v=exam6',
                lessons: [
                    {
                        id: 1,
                        name: 'الحلقة 1',
                        videoLink: 'https://youtu.be/aStTnpSd5J0?si=8LuuZZoM7J6dFGO0'
                    },
                    {
                        id: 2,
                        name: 'الحلقة 2',
                        videoLink: 'https://youtu.be/vFtZjuuuRGk?si=nnjSsqzbm1PmidrM'
                    },
                    {
                        id: 3,
                        name: 'الحلقة 3',
                        videoLink: 'https://youtu.be/l2aJve4Pp2A?si=0wnTmrGwucnV2nQP'
                    },
                ]
            },
            {
                id: 4,
                name: 'الفصل الرابع',
                playlist: 'https://youtu.be/yOhcPH-At5k?si=EbL0GYt0o097sHQT',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الثاني للخامس العلمي',
                examLink: 'https://youtube.com/watch?v=exam6',
                lessons: [
                    {
                        id: 1,
                        name: 'الحلقة 1',
                        videoLink: 'https://youtu.be/yOhcPH-At5k?si=EbL0GYt0o097sHQT'
                    },
                    {
                        id: 2,
                        name: 'الحلقة 2',
                        videoLink: 'https://youtu.be/HXUF9c1BRmc?si=oGzbkw633r2EpEij'
                    },
                    {
                        id: 3,
                        name: 'الحلقة 3',
                        videoLink: 'https://youtu.be/r8lHboNG4Ks?si=ud6y3wRuV-kscsry'
                    },
                ]
            }
        ]
    },














    {
        id: 4,
        name: 'السادس العلمي',
        icon: '<i class="fa-solid fa-6"></i>',
        semesters: [
            {
                id: 1,
                name: 'الفصل الأول',
                file: '24وزاريات ف1 24.pdf',
                playlist: 'https://youtu.be/1NuthcKqX0I',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الأول للسادس العلمي',
                examLink: 'امتحان فصل اول.pdf',
                lessons: [
                    {
                        id: 1,
                        name: 'كلاميات الفصل الاول',
                        videoLink: 'https://youtu.be/1NuthcKqX0I'
                    },
                    {
                        id: 2,
                        name: 'مسائل المتسعة المنفردة',
                        videoLink: 'https://youtu.be/gU-bobfC13Q'
                    },
                    {
                        id: 3,
                        name: 'مسائل التوالي و التوازي',
                        videoLink: 'https://youtu.be/IER3MHpe1Jg'
                    },
                    {
                        id: 4,
                        name: 'مسائل الربط المختلط مسائل تفريغ المتسعة',
                        videoLink: 'https://youtu.be/XHeTH3Wjweo'
                    },
                ]
            },
            {
                id: 2,
                name: 'الفصل الثاني',
                file: 'وزاربات ف2 كامل.pdf',
                playlist: 'https://youtu.be/waMAO5X_v7M',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الثاني للسادس العلمي',
                examLink: 'ثاني فيزياء السادس العلمي.pdf',
                lessons: [
                    {
                        id: 1,
                        name: 'كلاميات الفصل الثاني',
                        videoLink: 'https://youtu.be/waMAO5X_v7M'
                    },
                    {
                        id: 2,
                        name: 'مسائل الساق',
                        videoLink: 'https://youtu.be/KZGl5Hb5-7Y'
                    },
                    {
                        id: 3,
                        name: 'مسائل المولد',
                        videoLink: 'https://youtu.be/17Fj2mUhqGI'
                    },
                ]
            },
            
            {
                id: 3,
                name: 'الفصل الثالث',
                file: 'ف 3.pdf',
                playlist: 'https://youtu.be/mdVk096phSU',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الثاني للسادس العلمي',
                examLink: 'امتحان الفصل الثالث.pdf',
                lessons: [
                    {
                        id: 1,
                        name: 'كلاميات الفصل الثالث الجزء الأول',
                        videoLink: 'https://youtu.be/mdVk096phSU'
                    },
                    {
                        id: 2,
                        name: 'كلاميات الفصل الثالث الجزء ٢',
                        videoLink: 'https://youtu.be/Yaw-CWZaFPA'
                    },
                    {
                        id: 3,
                        name: 'مسائل التيار المؤثر',
                        videoLink: 'https://youtu.be/FZRR3Z9H4RQ'
                    },
                    {
                        id: 4,
                        name: 'مسائل ربط التوالي',
                        videoLink: 'https://youtu.be/sWevbrfxOkY'
                    },
                    {
                        id: 5,
                        name: 'مسائل الرنين',
                        videoLink: 'https://youtu.be/NC4shTttesk'
                    },
                    {
                        id: 6,
                        name: 'مسائل التوازي',
                        videoLink: 'https://youtu.be/tGzjqMSbNcE'
                    },
                ]
            },
            
            {
                id: 4,
                name: 'الفصل الرابع',
                file: 'ف 4.pdf',
                playlist: 'https://youtu.be/tJJvBFMkmxI',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الثاني للسادس العلمي',
                examLink: 'photo_5445039605658282498_y.jpg',
                lessons: [
                    {
                        id: 1,
                        name: 'الجزء 1',
                        videoLink: 'https://youtu.be/tJJvBFMkmxI'
                    },
                    {
                        id: 2,
                        name: 'الجزء 2',
                        videoLink: 'https://youtu.be/6_KYYmj1uzA'
                    },
                ]
            },
            
            {
                id: 5,
                name: 'الفصل الخامس',
                file: 'ف 5.pdf',
                playlist: 'https://youtu.be/XfkhMeHQ_uo',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الثاني للسادس العلمي',
                examLink: 'امتحان الفصل الخامس تطبيقي جديد.pdf',
                lessons: [
                    {
                        id: 1,
                        name: 'الجزء 1',
                        videoLink: 'https://youtu.be/XfkhMeHQ_uo'
                    },
                    {
                        id: 2,
                        name: 'الجزء 2',
                        videoLink: 'https://youtu.be/tC_Uk2sT63Q'
                    },
                    {
                        id: 3,
                        name: 'الجزء 3',
                        videoLink: 'https://youtu.be/NwoowaX6C-8'
                    },
                ]
            },
            
            {
                id: 6,
                name: 'الفصل السادس',
                file: 'ف 6 ت.pdf',
                playlist: 'https://youtu.be/PpUtNeWAiFo',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الثاني للسادس العلمي',
                examLink: 'https://youtube.com/watch?v=exam8',
                lessons: [
                    {
                        id: 1,
                        name: 'الجزء 1',
                        videoLink: 'https://youtu.be/PpUtNeWAiFo'
                    },
                    {
                        id: 2,
                        name: 'الجزء 2',
                        videoLink: 'https://youtu.be/_GJYlS2aB5s'
                    },
                ]
            },
            
            {
                id: 7,
                name: 'الفصل السابع',
                file: 'ف 7 الكترونيات الحالة الصلبة.pdf',
                playlist: 'https://youtu.be/BP0CYgcGRwk',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الثاني للسادس العلمي',
                examLink: 'امتحان الفصل السابع 2025.pdf',
                lessons: [
                    {
                        id: 1,
                        name: 'الجزء 1',
                        videoLink: 'https://youtu.be/BP0CYgcGRwk'
                    },
                    {
                        id: 2,
                        name: 'الجزء 2',
                        videoLink: 'https://youtu.be/aQMSHIhk-wY'
                    },
                ]
            },
            
            {
                id: 8,
                name: 'الفصل الثامن',
                file: 'ف 8 (2).pdf',
                playlist: 'https://youtu.be/amt8XvYW-Qk',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الثاني للسادس العلمي',
                examLink: 'https://youtube.com/watch?v=exam8',
                lessons: [
                    {
                        id: 1,
                        name: 'الجزء 1',
                        videoLink: 'https://youtu.be/amt8XvYW-Qk'
                    },
                    {
                        id: 2,
                        name: 'الجزء 2',
                        videoLink: 'https://youtu.be/GBUv5jIL-no'
                    },
                ]
            },
            
            {
                id: 9,
                name: 'الفصل التاسع',
                file: 'ف 9 النووية.pdf',
                playlist: 'https://youtu.be/fR3dI32ae2M',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الثاني للسادس العلمي',
                examLink: 'https://youtube.com/watch?v=exam8',
                lessons: [
                    {
                        id: 1,
                        name: 'الجزء 1',
                        videoLink: 'https://youtu.be/fR3dI32ae2M'
                    },
                    {
                        id: 2,
                        name: 'الجزء 2',
                        videoLink: 'https://youtu.be/5HRZqm8eRak'
                    },
                ]
            },
        ]
    }
];

// رقم الواتساب
const whatsappNumber = '9647XXXXXXXXX';

// روابط التواصل الاجتماعي
const socialLinks = {
    whatsapp: `https://wa.me/${9647723327421}`,
    youtube: 'https://youtube.com/@-Haidar_physical',
    instagram: 'https://instagram.com/haidar_physics',
    telegram: 'https://t.me/hader_M1',
    phone: '+9647723327421'
};