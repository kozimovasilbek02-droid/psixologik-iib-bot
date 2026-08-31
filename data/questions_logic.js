const LOGIC_QUESTIONS = [
  {
    "id": 1,
    "question": {
      "lat": "Hadisi sharif hukmlarida, odam bolasining yoshi ulg'aygan sari ko'p narsalarga xohishi so'nadi, ammo 2 ta narsaga rag'bati ortib boradi, deyilgan. Birinchisi boylikka bo'lsa, ikkinchisini toping.",
      "cyr": "Ҳадиси шариф ҳукмларида, одам боласининг ёши улғайган сари кўп нарсаларга хоҳиши сўнади, аммо 2 та нарсага рағбати ортиб боради, дейилган. Биринчиси бойликка бўлса, иккинчисини топинг.",
      "rus": "В хадисах говорится, что с возрастом у человека угасают многие желания, но тяга к двум вещам возрастает. Первое — это богатство, найдите второе."
    },
    "options": [
      {
        "text": {
          "lat": "Uzoq umr ko'rish",
          "cyr": "Узоқ умр кўриш",
          "rus": "Долгая жизнь"
        },
        "is_correct": true
      },
      {
        "text": {
          "lat": "Obro'li bo'lish",
          "cyr": "Обрўли бўлиш",
          "rus": "Авторитет и слава"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Aql-zakovatga ega bo'lish",
          "cyr": "Ақл-заковатга эга бўлиш",
          "rus": "Мудрость"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Baxtli yashash",
          "cyr": "Бахтли яшаш",
          "rus": "Счастье"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 2,
    "question": {
      "lat": "O'zbek xalq topishmog'i: «Otamdan bir meros qoldi, yerga ko'msam chirimaydi». Tana chiriydi, ammo u chirimaydi. Otadan qoladigan qaysi meros haqida gap ketmoqda?",
      "cyr": "Ўзбек халқ топишмоғи: «Отамдан бир мерос қолди, ерга кўмсам чиримайди». Тана чирийди, аммо у чиримайди. Отадан қоладиган қайси мерос ҳақида гап кетмоқда?",
      "rus": "Узбекская народная загадка: «Осталось наследство от отца, если закопать в землю — не сгниет». Тело истлеет, а оно нет. О каком наследстве речь?"
    },
    "options": [
      {
        "text": {
          "lat": "Insonga berilgan ism (nom)",
          "cyr": "Инсонга берилган исм (ном)",
          "rus": "Имя человека"
        },
        "is_correct": true
      },
      {
        "text": {
          "lat": "Qilingan savob ishlar",
          "cyr": "Қилинган савоб ишлар",
          "rus": "Добрые деяния"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Oltin va boylik",
          "cyr": "Олтин ва бойлик",
          "rus": "Золото и богатство"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Meros qolgan uy",
          "cyr": "Мерос қолган уй",
          "rus": "Унаследованный дом"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 3,
    "question": {
      "lat": "Katta yuk kemasi kapitanining kayutasida 3 ta soat uch xil vaqtni ko'rsatib turadi. Bu uchala soat qaysi vaqtlarni ko'rsatadi?",
      "cyr": "Катта юк кемаси капитанининг каютасида 3 та соат уч хил вақтни кўрсатиб туради. Бу учала соат қайси вақтларни кўрсатади?",
      "rus": "В каюте капитана большого грузового судна 3 часов показывают разное время. Какое именно время они показывают?"
    },
    "options": [
      {
        "text": {
          "lat": "Yuk olingan davlat, yetkaziladigan davlat va Grinvich vaqti",
          "cyr": "Юк олинган давлат, етказиладиган давлат ва Гринвич вақти",
          "rus": "Время страны отправления, назначения и время по Гринвичу"
        },
        "is_correct": true
      },
      {
        "text": {
          "lat": "Kunduzgi vaqt, kechki vaqt va Grinvich vaqti",
          "cyr": "Кундузги вақт, кечки вақт ва Гринвич вақти",
          "rus": "Дневное, ночное и время по Гринвичу"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Kema jo'nagan vaqt, kelish vaqti va Grinvich",
          "cyr": "Кема жўнаган вақт, келиш вақти ва Гринвич",
          "rus": "Время отплытия, прибытия и Гринвич"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Fasllarga qarab o'zgaruvchi vaqtlar",
          "cyr": "ФаслResourceларга қараб ўзгарувчи вақтлар",
          "rus": "Сезонное время"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 4,
    "question": {
      "lat": "Antik davrlardan buyon binolar oldiga nima sababdan faqat sher haykali qo'riqchi sifatida o'rnatilgan?",
      "cyr": "Антик даврлардан буён бинолар олдига нима сабабдан фақат шер ҳайкали қўриқчи сифатида ўрнатилган?",
      "rus": "Почему с античных времен в качестве стражей перед зданиями устанавливали именно статуи львов?"
    },
    "options": [
      {
        "text": {
          "lat": "Sher ko'zlari ochiq holda uxlagani uchun",
          "cyr": "Шер кўзлари очиқ ҳолда ухлагани учун",
          "rus": "Потому что львы спят с полуоткрытыми глазами"
        },
        "is_correct": true
      },
      {
        "text": {
          "lat": "Sher hayvonlar podshohi bo'lganligi uchun",
          "cyr": "Шер ҳайвонлар подшоҳи бўлганлиги учун",
          "rus": "Потому что лев — царь зверей"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Haykali yasash oson bo'lganligi uchun",
          "cyr": "Ҳайкали ясаш осон бўлганлиги учун",
          "rus": "Потому что статую льва легче лепить"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Yirtqichligi va bahibatliligi uchun",
          "cyr": "Йиртқичлиги ва баҳибатлилиги учун",
          "rus": "Из-за грозного вида"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 5,
    "question": {
      "lat": "O'zbekistonda erta bahorda g'arq gullaydigan, ammo meva bermaydigan qaysi daraxtni «va'daboz» deb atashadi?",
      "cyr": "Ўзбекистонда эрта баҳорда ғарқ гуллайдиган, аммо мева бермайдиган қайси дарахтни «ваьдабоз» деб аташади?",
      "rus": "Какое дерево в Узбекистане пышно цветет ранней весной, но не дает плодов, из-за чего его называют «пустословом»?"
    },
    "options": [
      {
        "text": {
          "lat": "Tol daraxti",
          "cyr": "Тол дарахти",
          "rus": "Ива"
        },
        "is_correct": true
      },
      {
        "text": {
          "lat": "Siren",
          "cyr": "Сирен",
          "rus": "Сирень"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Jiyda",
          "cyr": "Жийда",
          "rus": "Джида"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Terak",
          "cyr": "Терак",
          "rus": "Тополь"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 6,
    "question": {
      "lat": "Amir Temur davrida 7 turi (suls, muhaqqaq, nasx, tavqe', riqo', ta'liq, nastaliq) qo'llanilgan soha nima?",
      "cyr": "Амир Темур даврида 7 тури (сулс, муҳаққақ, насх, тавқеъ, риқоъ, таълиқ, насталиқ) қўлланилган соҳа нима?",
      "rus": "В эпоху Амира Темура использовались 7 стилей (сульс, мухаккак, насх, тавки, рика, талик, насталик). К какой сфере они относятся?"
    },
    "options": [
      {
        "text": {
          "lat": "Xattotlik uslublari",
          "cyr": "Хаттотлик услублари",
          "rus": "Стили каллиграфии"
        },
        "is_correct": true
      },
      {
        "text": {
          "lat": "Jang san'ati uslublari",
          "cyr": "Жанг санъати услублари",
          "rus": "Стили боевых искусств"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Boshqaruv uslublari",
          "cyr": "Бошқарув услублари",
          "rus": "Методы управления"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Me'morchilik uslublari",
          "cyr": "Меъморчилик услублари",
          "rus": "Архитектурные стили"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 7,
    "question": {
      "lat": "Alp tog'laridagi sovuqda o'ta sekin o'sgan noyob zich daraxtlardan dunyoga mashhur cholg'u asboblarini yasagan usta kim?",
      "cyr": "Альп тоғларидаги совуқда ўта секин ўсган ноёб зич дарахтлардан дунёга машҳур чолғу асбобларини ясаган уста ким?",
      "rus": "Какой мастер изготавливал всемирно известные музыкальные инструменты из плотной древесины альпийских деревьев?"
    },
    "options": [
      {
        "text": {
          "lat": "Antonio Stradivari (Stradivarius skripkalari)",
          "cyr": "Антонио Страдивари (Страдивари скрипкалари)",
          "rus": "Антонио Страдивари (скрипки Страдивари)"
        },
        "is_correct": true
      },
      {
        "text": {
          "lat": "Nikolo Paganini",
          "cyr": "Николо Паганини",
          "rus": "Никколо Паганини"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Juzeppe Gvarneri",
          "cyr": "Жузеппе Гварнери",
          "rus": "Джузеппе Гварнери"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Portopens",
          "cyr": "Портопенс",
          "rus": "Портопенс"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 8,
    "question": {
      "lat": "O'z haykali tirikligidayoq o'rnatilganda: «Menga bronzadan emas, ... dan haykal qo'yishsa bo'lardi» degan mashhur davlat arbobi kim?",
      "cyr": "Ўз ҳайкали тириклигидаёқ ўрнатилганда: «Менга бронзадан эмас, ... дан ҳайкал қўйишса бўларди» деган машҳур давлат арбоби ким?",
      "rus": "Какому государственному деятелю еще при жизни поставили памятник, на что последовал ответ: «Мне следовало бы ставить памятник из железа»?"
    },
    "options": [
      {
        "text": {
          "lat": "Margaret Tetcher (Temir xonim)",
          "cyr": "Маргарет Тэтчер (Темир хоним)",
          "rus": "Маргарет Тэтчер («Железная леди»)"
        },
        "is_correct": true
      },
      {
        "text": {
          "lat": "Indira Gandi",
          "cyr": "Индира Ганди",
          "rus": "Индира Ганди"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Uinston Cherchill",
          "cyr": "Уинстон Черчилл",
          "rus": "Уинстон Черчилль"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Sharl de Goll",
          "cyr": "Шарль де Голль",
          "rus": "Шарль де Голль"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 9,
    "question": {
      "lat": "Dengizchi-matroslarning shimlari pochasining keng (klyosh) bo'lishi sababi nima?",
      "cyr": "Денгизчи-матросларнинг шимлари почасининг кенг (клёш) бўлиши сабаби нима?",
      "rus": "Почему матросские брюки традиционно шились с широким клешем книзу?"
    },
    "options": [
      {
        "text": {
          "lat": "Suvga tushib ketganda osongina yechib tashlash uchun",
          "cyr": "Сувга тушиб кетганда осонгина ечиб ташлаш учун",
          "rus": "Чтобы легко и быстро снять брюки при падении в воду"
        },
        "is_correct": true
      },
      {
        "text": {
          "lat": "Havo aylanishi va terlamaslik uchun",
          "cyr": "Ҳаво айланиши ва терламаслик учун",
          "rus": "Для вентиляции воздуха"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Oyoq kiyim ichiga solib olish uchun",
          "cyr": "Оёқ кийим ичига солиб олиш учун",
          "rus": "Чтобы заправлять в обувь"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Kemada tez yugurish uchun",
          "cyr": "Кемада тез югуриш учун",
          "rus": "Для быстрого бега"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 10,
    "question": {
      "lat": "Usmonli turklar istilo qilgan hududlardagi yangi cherkovlarda qat'iy ravishda nima bo'lmasligi talab qilingan?",
      "cyr": "Усмонли турклар истило қилган ҳудудлардаги янги черковларда қатъий равишда нима бўлмаслиги талаб қилинган?",
      "rus": "Что категорически запрещалось иметь в церквях на завоеванных Османской империей территориях?"
    },
    "options": [
      {
        "text": {
          "lat": "Cherkov qo'ng'irog'i (jarangi)",
          "cyr": "Черков қўнғироғи (жаранги)",
          "rus": "Церковные колокола"
        },
        "is_correct": true
      },
      {
        "text": {
          "lat": "Ikonalar",
          "cyr": "Иконалар",
          "rus": "Иконы"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Oltin buyumlar",
          "cyr": "Олтин буюмлар",
          "rus": "Золотые предметы"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Xochlar",
          "cyr": "Хочлар",
          "rus": "Кресты"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 11,
    "question": {
      "lat": "Sherlok Xolms asarida qamoqxonada tutqunlarga iyulda 4 ta, oktyabrda 11 ta, dekabrda 18 ta berilgan buyum nima edi?",
      "cyr": "Шерлок Холмс асарида қамоқхонада тутқунларга июлда 4 та, октябрда 11 та, декабрда 18 та берилган буюм нима эди?",
      "rus": "Какой предмет выдавали заключенным: в июле — 4 шт., в октябре — 11 шт., в декабре — 18 шт. (в зависимости от длины ночи)?"
    },
    "options": [
      {
        "text": {
          "lat": "Sham (yoritish uchun)",
          "cyr": "Шам (ёритиш учун)",
          "rus": "Свечи (для освещения)"
        },
        "is_correct": true
      },
      {
        "text": {
          "lat": "Non",
          "cyr": "Нон",
          "rus": "Хлеб"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Tamaki",
          "cyr": "Тамаки",
          "rus": "Табак"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Sovun",
          "cyr": "Совун",
          "rus": "Мыло"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 12,
    "question": {
      "lat": "Mashhur rassom Pikassoning suratlari qalbakilashtirilishining oldini olish uchun qanday chora ko'rilgan?",
      "cyr": "Машҳур рассом Пикассонинг суратлари қалбакилаштирилишининг олдини олиш учун қандай чора кўрилган?",
      "rus": "Какую меру применили, чтобы предотвратить подделку картин Пабло Пикассо?"
    },
    "options": [
      {
        "text": {
          "lat": "Surat bo'yog'iga barmoq izini qoldirish",
          "cyr": "Сурат бўёғига бармоқ изини қолдириш",
          "rus": "Оставлять отпечаток пальца в краске"
        },
        "is_correct": true
      },
      {
        "text": {
          "lat": "Yashirin maxsus imzo qo'yish",
          "cyr": "Яширин махсус имзо қўйиш",
          "rus": "Тайная подпись"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Sana va vaqtni yozib borish",
          "cyr": "Сана ва вақтни ёзиб бориш",
          "rus": "Указание даты"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Orqasiga eskiz chizish",
          "cyr": "Орқасига эскиз чизиш",
          "rus": "Эскиз на обороте"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 13,
    "question": {
      "lat": "Xo'ja Nasriddin: «Bir qarasang cho't tashlaydi, bir qarasang tikuvchi, etikdo'z, sartaroshdek harakat qiladi» deb kimni ta'riflagan?",
      "cyr": "Хўжа Насриддин: «Бир қарасанг чўт ташлайди, бир қарасанг тикувчи, этикдўз, сартарошдек ҳаракат қилади» деб кимни таърифлаган?",
      "rus": "Кого Ходжа Насреддин описал словами: «То считает как счетовод, то шьет как портной, то стучит как сапожник»?"
    },
    "options": [
      {
        "text": {
          "lat": "Orkestr dirijyorini",
          "cyr": "Оркестр дирижёрини",
          "rus": "Дирижера оркестра"
        },
        "is_correct": true
      },
      {
        "text": {
          "lat": "Maktab o'qituvchisini",
          "cyr": "Мактаб ўқитувчисини",
          "rus": "Учителя"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Harbiy komandirni",
          "cyr": "Ҳарбий командирни",
          "rus": "Командира"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Bozor dallolini",
          "cyr": "Бозор даллолини",
          "rus": "Рыночного торговца"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 14,
    "question": {
      "lat": "Ertalab och qoringa nechta qaynatilgan tuxum yeyish mumkin?",
      "cyr": "Эрталаб оч қоринга нечта қайнатилган тухум ейиш мумкин?",
      "rus": "Сколько вареных яиц можно съесть натощак утром?"
    },
    "options": [
      {
        "text": {
          "lat": "Faqat 1 dona",
          "cyr": "Фақат 1 дона",
          "rus": "Только 1"
        },
        "is_correct": true
      },
      {
        "text": {
          "lat": "2 dona",
          "cyr": "2 дона",
          "rus": "2 штуки"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "3 dona",
          "cyr": "3 дона",
          "rus": "3 штуки"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Qorin to'yguncha",
          "cyr": "Қорин тўйгунча",
          "rus": "Сколько влезет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 15,
    "question": {
      "lat": "«U shayton kabi qop-qora, farishta kabi top-toza va muhabbat kabi shirin bo'lmog'i kerak» deb ta'riflangan ichimlik nima?",
      "cyr": "«У шайтон каби қоп-қора, фаришта каби топ-тоза ва муҳаббат каби ширин бўлмоғи керак» деб таърифланган ичимлик нима?",
      "rus": "О каком напитке сказано: «Он должен быть черным как дьявол, чистым как ангел и сладким как любовь»?"
    },
    "options": [
      {
        "text": {
          "lat": "Qahva (kofe)",
          "cyr": "Қаҳва (кофе)",
          "rus": "Кофе"
        },
        "is_correct": true
      },
      {
        "text": {
          "lat": "Qora choy",
          "cyr": "Қора чой",
          "rus": "Черный чай"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Sharob",
          "cyr": "Шароб",
          "rus": "Вино"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Shokoladli kokteyl",
          "cyr": "Шоколадли коктейл",
          "rus": "Горячий шоколад"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 16,
    "question": {
      "lat": "Xonada yonib turgan 7 ta shamdan 3 tasi o'chirib qo'yilsa, oxir-oqibat nechta sham qoladi?",
      "cyr": "Хонада ёниб турган 7 та шамдан 3 таси ўчириб қўйилса, охир-оқибат нечта шам қолади?",
      "rus": "В комнате горело 7 свечей. 3 свечи затушили. Сколько свечей останется в итоге?"
    },
    "options": [
      {
        "text": {
          "lat": "3 ta",
          "cyr": "3 та",
          "rus": "3 свечи"
        },
        "is_correct": true
      },
      {
        "text": {
          "lat": "4 ta",
          "cyr": "4 та",
          "rus": "4 свечи"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "7 ta",
          "cyr": "7 та",
          "rus": "7 свечей"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Birorta ham qolmaydi",
          "cyr": "Бирорта ҳам қолмайди",
          "rus": "Ни одной"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 17,
    "question": {
      "lat": "Salim Daminga: «Sen menga 1 so'm bersang, pulimiz teng bo'ladi». Damin esa: «Sen menga 1 so'm bersang, pulim senikidan 2 barobar ko'p bo'ladi» dedi. Bolalarda qanchadan pul bor edi?",
      "cyr": "Салим Даминга: «Сен менга 1 сўм берсанг, пулимиз тенг бўлади». Дамин эса: «Сен менга 1 сўм берсанг, пулим сеникидан 2 баробар кўп бўлади» деди. Болаларда қанчадан пул бор эди?",
      "rus": "Салим говорит Дамину: «Дай мне 1 сум, и у нас будет поровну». Дамин отвечает: «Дай ты мне 1 сум, и у меня станет вдвое больше, чем у тебя». Сколько денег у каждого?"
    },
    "options": [
      {
        "text": {
          "lat": "Salimda 5 so'm, Daminda 7 so'm",
          "cyr": "Салимда 5 сўм, Даминда 7 сўм",
          "rus": "У Салима 5 сум, у Дамина 7 сум"
        },
        "is_correct": true
      },
      {
        "text": {
          "lat": "Salimda 1 so'm, Daminda 3 so'm",
          "cyr": "Салимда 1 сўм, Даминда 3 сўм",
          "rus": "У Салима 1 сум, у Дамина 3 сум"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Salimda 3 so'm, Daminda 5 so'm",
          "cyr": "Салимда 3 сўм, Даминда 5 сўм",
          "rus": "У Салима 3 сум, у Дамина 5 сум"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Salimda 4 so'm, Daminda 6 so'm",
          "cyr": "Салимда 4 сўм, Даминда 6 сўм",
          "rus": "У Салима 4 сум, у Дамина 6 сум"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 18,
    "question": {
      "lat": "Toshkentga ketayotgan yo'lovchi yo'lda 3 nafar tanishini va ularning har birining yonidagi bittadan bolasini uchratdi. Jami nechta odam Toshkentga ketayotgan edi?",
      "cyr": "Тошкентга кетаётган йўловчи йўлда 3 нафар танишини ва уларнинг ҳар бирининг ёнидаги биттадан боласини учратди. Жами нечта одам Тошкентга кетаётган эди?",
      "rus": "Путник, идущий в Ташкент, встретил на пути 3 знакомых, у каждого из которых было по ребенку. Сколько человек шло в Ташкент?"
    },
    "options": [
      {
        "text": {
          "lat": "Faqat 1 kishi",
          "cyr": "Фақат 1 киши",
          "rus": "Только 1 человек"
        },
        "is_correct": true
      },
      {
        "text": {
          "lat": "7 kishi",
          "cyr": "7 киши",
          "rus": "7 человек"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "4 kishi",
          "cyr": "4 киши",
          "rus": "4 человека"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "10 kishi",
          "cyr": "10 киши",
          "rus": "10 человек"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 19,
    "question": {
      "lat": "Tikuvchi 18 metrli matodan har kuni 2 metr qirqib oladi. Oxirgi bo'lakni u nechanchi kuni qirqadi?",
      "cyr": "Тикувчи 18 метрли матодан ҳар куни 2 метр қирқиб олади. Охирги бўлакни у нечанчи куни қирқади?",
      "rus": "Портной отрезает от 18-метрового куска ткани по 2 метра каждый день. На какой день он сделает последний разрез?"
    },
    "options": [
      {
        "text": {
          "lat": "8-kuni",
          "cyr": "8-куни",
          "rus": "На 8-й день"
        },
        "is_correct": true
      },
      {
        "text": {
          "lat": "9-kuni",
          "cyr": "9-куни",
          "rus": "На 9-й день"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "7-kuni",
          "cyr": "7-куни",
          "rus": "На 7-й день"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "10-kuni",
          "cyr": "10-куни",
          "rus": "На 10-й день"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 20,
    "question": {
      "lat": "Dangasa bola 24 soatlik sutkaning 1/2 qismini uxlashga (12 s), 1/3 qismini o'yinga (8 s) va 1/6 qismini televizorga (4 s) sarfladi. Qolgan vaqtda dars qilsa, u necha soat dars qilgan?",
      "cyr": "Дангаса бола 24 соатлик сутканинг 1/2 қисмини ухлашга (12 с), 1/3 қисмини ўйинга (8 с) ва 1/6 қисмини телевизорга (4 с) сарфлади. Қолган вақтда дарс қилса, у неча соат дарс қилган?",
      "rus": "Ленивый мальчик потратил 1/2 суток на сон (12 ч), 1/3 на игры (8 ч) и 1/6 на телевизор (4 ч). Сколько часов осталось на учебу?"
    },
    "options": [
      {
        "text": {
          "lat": "0 soat",
          "cyr": "0 соат",
          "rus": "0 часов"
        },
        "is_correct": true
      },
      {
        "text": {
          "lat": "1 soat",
          "cyr": "1 соат",
          "rus": "1 час"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "2 soat",
          "cyr": "2 соат",
          "rus": "2 часа"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "30 daqiqa",
          "cyr": "30 дақиқа",
          "rus": "30 минут"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 21,
    "question": {
      "lat": "Traktorchining Farhod degan akasi bor, ammo Farhodning ukasi yo'q. Bu qanday bo'lishi mumkin?",
      "cyr": "Тракторчининг Фарҳод деган акаси бор, аммо Фарҳоднинг укаси йўқ. Бу қандай бўлиши мумкин?",
      "rus": "У тракториста есть старший брат Фарход, но у Фархода нет братьев. Кем приходится тракторист Фарходу?"
    },
    "options": [
      {
        "text": {
          "lat": "Traktorchi ayol",
          "cyr": "Тракторчи аёл",
          "rus": "Тракторист — женщина"
        },
        "is_correct": true
      },
      {
        "text": {
          "lat": "Farhod tutingan aka",
          "cyr": "Фарҳод тутинган ака",
          "rus": "Фарход приемный брат"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "O'gay aka",
          "cyr": "Ўгай ака",
          "rus": "Сводный брат"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Ular qarindosh emas",
          "cyr": "Улар қариндош эмас",
          "rus": "Они не родственники"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 22,
    "question": {
      "lat": "Qaysi o'simlikning hosili yig'ib olingach, uning 90 foizi yoqib yuboriladi (chekiladi), 10 foizi esa tashlab yuboriladi?",
      "cyr": "Қайси ўсимликнинг ҳосили йиғиб олингач, унинг 90 фоизи ёқиб юборилади (чекилади), 10 фоизи эса ташлаб юборилади?",
      "rus": "Урожай какого растения после сбора сжигается на 90% (выкуривается), а оставшиеся 10% выбрасываются?"
    },
    "options": [
      {
        "text": {
          "lat": "Tamaki o'simligi",
          "cyr": "Тамаки ўсимлиги",
          "rus": "Табак"
        },
        "is_correct": true
      },
      {
        "text": {
          "lat": "Bug'doy somoni",
          "cyr": "Буғдой сомони",
          "rus": "Солома"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "G'o'zapoya",
          "cyr": "Ғўзапоя",
          "rus": "Стебли хлопчатника"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Yalpiz",
          "cyr": "Ялпиз",
          "rus": "Мята"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 23,
    "question": {
      "lat": "Toshbaqa 17 metrli chuqurlikdan chiqmoqchi. U kunduzi 5 metr yuqoriga chiqadi, kechasi 2 metr pastga sirg'aladi (kuniga sof 3 metr). U nechanchi kuni tepaga chiqadi?",
      "cyr": "Тошбақа 17 метрли чуқурликдан чиқмоқчи. У кундузи 5 метр юқорига чиқади, кечаси 2 метр пастга сирғалади (кунига соф 3 метр). У нечанчи куни тепага чиқади?",
      "rus": "Черепаха выбирается из 17-метровой ямы. Днем поднимается на 5 м, ночью сползает на 2 м. На какой день она выберется?"
    },
    "options": [
      {
        "text": {
          "lat": "5-kuni",
          "cyr": "5-куни",
          "rus": "На 5-й день"
        },
        "is_correct": true
      },
      {
        "text": {
          "lat": "6-kuni",
          "cyr": "6-куни",
          "rus": "На 6-й день"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "7-kuni",
          "cyr": "7-куни",
          "rus": "На 7-й день"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "8-kuni",
          "cyr": "8-куни",
          "rus": "На 8-й день"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 24,
    "question": {
      "lat": "Bu kun dushanbadan keyin, payshanbadan oldin kelmaydi (ya'ni juma, shanba, yakshanba). Ertasi yakshanba emas (demak shanba emas), ertadan keyin esa shanba emas (demak payshanba emas). Bu qaysi kun?",
      "cyr": "Бу кун душанбадан кейин, пайшанбадан олдин келмайди (яъни жума, шанба, якшанба). Эртаси якшанба эмас (демак шанба эмас), эртадан кейин эса шанба эмас (демак пайшанба эмас). Бу қайси кун?",
      "rus": "Этот день недели не идет до четверга. Завтра не воскресенье, а послезавтра не суббота. Какой это день?"
    },
    "options": [
      {
        "text": {
          "lat": "Juma",
          "cyr": "Жума",
          "rus": "Пятница"
        },
        "is_correct": true
      },
      {
        "text": {
          "lat": "Dushanba",
          "cyr": "Душанба",
          "rus": "Понедельник"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Seshanba",
          "cyr": "Сешанба",
          "rus": "Вторник"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Yakshanba",
          "cyr": "Якшанба",
          "rus": "Воскресенье"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 25,
    "question": {
      "lat": "Ali, Vali va Soli derazani sindirishdi. Ali «Vali sindirdi», Vali «Soli sindirdi», Soli esa «Men o'zim sindirdim» dedi. Uchovi ham yolg'on gapirgan bo'lsa, derazani kim sindirgan?",
      "cyr": "Али, Вали ва Соли деразани синдиришди. Али «Вали синдирди», Вали «Соли синдирди», Соли эса «Мен ўзим синдирдим» деди. Учови ҳам ёлғон гапирган бўлса, деразани ким синдирган?",
      "rus": "Разбито окно. Али сказал: «Разбил Вали», Вали: «Разбил Соли», Соли: «Разбил я». Если все трое солгали, кто разбил окно?"
    },
    "options": [
      {
        "text": {
          "lat": "Ali sindirgan",
          "cyr": "Али синдирган",
          "rus": "Али"
        },
        "is_correct": true
      },
      {
        "text": {
          "lat": "Vali sindirgan",
          "cyr": "Вали синдирган",
          "rus": "Вали"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Soli sindirgan",
          "cyr": "Соли синдирган",
          "rus": "Соли"
        },
        "is_correct": false
      },
      {
        "text": {
          "lat": "Uchchalasi birgalikda",
          "cyr": "Уччаласи биргаликда",
          "rus": "Все трое"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": "log_math_1",
    "question": {
      "lat": "Agar 3 ta mushuk 3 ta sichqonni 3 daqiqada tutsa, 100 ta mushuk 100 ta sichqonni necha daqiqada tutadi?",
      "cyr": "Агар 3 та мушук 3 та сичқонни 3 дақиқада тутса, 100 та мушук 100 та сичқонни неча дақиқада тутади?",
      "rus": "Если 3 кошки ловят 3 мышей за 3 минуты, за сколько минут 100 кошек поймают 100 мышей?"
    },
    "options": [
      { "text": { "lat": "3 daqiqa", "cyr": "3 дақиқа", "rus": "3 минуты" }, "is_correct": true },
      { "text": { "lat": "100 daqiqa", "cyr": "100 дақиқа", "rus": "100 минут" }, "is_correct": false },
      { "text": { "lat": "30 daqiqa", "cyr": "30 дақиқа", "rus": "30 минут" }, "is_correct": false },
      { "text": { "lat": "1 daqiqa", "cyr": "1 дақиқа", "rus": "1 минута" }, "is_correct": false }
    ]
  },
  {
    "id": "log_math_2",
    "question": {
      "lat": "Poyezd uzunligi 100 metr. U tezligi 100 m/minut bo'lib, 100 metr uzunlikdagi tunnelga kirdi. Poyezd tunneldan to'liq chiqib ketishi uchun qancha vaqt ketadi?",
      "cyr": "Поезд узунлиги 100 метр. У тезлиги 100 м/минут бўлиб, 100 метр узунликдаги туннелга кирди. Поезд туннелдан тўлиқ чиқиб кетиши учун қанча вақт кетади?",
      "rus": "Длина поезда 100 метров. Со скоростью 100 м/мин он въезжает в тоннель длиной 100 метров. Сколько времени потребуется, чтобы поезд полностью вышел из тоннеля?"
    },
    "options": [
      { "text": { "lat": "2 minut", "cyr": "2 минут", "rus": "2 минуты" }, "is_correct": true },
      { "text": { "lat": "1 minut", "cyr": "1 минут", "rus": "1 минута" }, "is_correct": false },
      { "text": { "lat": "1.5 minut", "cyr": "1.5 минут", "rus": "1.5 минуты" }, "is_correct": false },
      { "text": { "lat": "0.5 minut", "cyr": "0.5 минут", "rus": "0.5 минуты" }, "is_correct": false }
    ]
  },
  {
    "id": "log_math_3",
    "question": {
      "lat": "Otasi va o'g'lining yoshlari yig'indisi 66 ga teng. Otasining yoshi o'g'lining yoshini teskari tartibda yozilishiga teng bo'lishi mumkin. Ularning yoshi nechada bo'lishi mumkin?",
      "cyr": "Отаси ва ўғлининг ёшлари йиғиндиси 66 га тенг. Отасининг ёши ўғлининг ёшини тескари тартибда ёзилишига тенг бўлиши мумкин. Уларнинг ёши нечада бўлиши мумкин?",
      "rus": "Сумма возрастов отца и сына равна 66. Возраст отца равен возрасту сына, записанному в обратном порядке. Каков их возраст?"
    },
    "options": [
      { "text": { "lat": "42 va 24", "cyr": "42 ва 24", "rus": "42 и 24" }, "is_correct": true },
      { "text": { "lat": "51 va 15", "cyr": "51 ва 15", "rus": "51 и 15" }, "is_correct": false },
      { "text": { "lat": "60 va 06", "cyr": "60 ва 06", "rus": "60 и 06" }, "is_correct": false },
      { "text": { "lat": "Hech qaysi biri", "cyr": "Ҳеч қайси бири", "rus": "Ни один из них" }, "is_correct": false }
    ]
  },
  {
    "id": "log_math_4",
    "question": {
      "lat": "Ko'lda liliyalar (suv parilari) o'smoqda. Har kuni ularning maydoni ikki barobarga oshadi. Agar ko'lni to'liq qoplash uchun 48 kun kerak bo'lsa, ko'lning yarmini qoplash uchun necha kun kerak?",
      "cyr": "Кўлда лилиялар ўсмоқда. Ҳар куни уларнинг майдони икки баробарга ошади. Агар кўлни тўлиқ қоплаш учун 48 кун керак бўлса, кўлнинг ярмини қоплаш учун неча кун керак?",
      "rus": "На озере растут кувшинки. Каждый день их площадь удваивается. Если для полного покрытия озера требуется 48 дней, сколько дней нужно, чтобы покрыть половину озера?"
    },
    "options": [
      { "text": { "lat": "47 kun", "cyr": "47 кун", "rus": "47 дней" }, "is_correct": true },
      { "text": { "lat": "24 kun", "cyr": "24 кун", "rus": "24 дня" }, "is_correct": false },
      { "text": { "lat": "12 kun", "cyr": "12 кун", "rus": "12 дней" }, "is_correct": false },
      { "text": { "lat": "46 kun", "cyr": "46 кун", "rus": "46 дней" }, "is_correct": false }
    ]
  }
];
