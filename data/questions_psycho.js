const PSYCHO_QUESTIONS = [
  {
    "id": 1,
    "question": {
      "lat": "Eplay olmayman deb qo'rqqanim sababli boshlagan ishimni tashlab ketgan vaqtlarim bo'lgan.",
      "cyr": "Эплай олмайман деб қўрққаним сабабли бошлаган ишимни ташлаб кетган вақтларим бўлган.",
      "rus": "У меня бывали случаи, когда я бросал начатое дело из-за страха, что не справлюсь."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 2,
    "question": {
      "lat": "Baxsda mening fikrimni o'zgartirish oson.",
      "cyr": "Бахсда менинг фикримни ўзгартириш осон.",
      "rus": "Меня легко переубедить в споре."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 3,
    "question": {
      "lat": "Asoslanmagan narsalarni gapiradigan odamlarni tuzatishdan o'zimni olib qochaman.",
      "cyr": "Асосланмаган нарсаларни гапирадиган одамларни тузатишдан ўзимни олиб қочаман.",
      "rus": "Я избегаю поправлять людей, которые говорят необоснованные вещи."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 4,
    "question": {
      "lat": "Men qancha xamdardlik va yoqtirishlariga loyiq bo'lsam, odamlar menga ularni shuncha ko'rsatadi.",
      "cyr": "Мен қанча хамдардлик ва ёқтиришларига лойиқ бўлсам, одамлар менга уларни шунча кўрсатади.",
      "rus": "Люди проявляют ко мне столько же сочувствия и симпатии, сколько я заслуживаю."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 5,
    "question": {
      "lat": "Ba'zan boshqa odamlar men nima xaqida o'ylayotganimni bilishlariga, ishonchim komil bo'ladi.",
      "cyr": "Баъзан бошқа одамлар мен нима хақида ўйлаётганимни билишларига, ишончим комил бўлади.",
      "rus": "Иногда я уверен, что другие люди знают, о чем я думаю."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 6,
    "question": {
      "lat": "O'z vadalarimning ustidan chiqmagan vaqtlarim xam bo'lgan.",
      "cyr": "Ўз вадаларимнинг устидан чиқмаган вақтларим хам бўлган.",
      "rus": "У меня бывали случаи, когда я не выполнял свои обещания."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 7,
    "question": {
      "lat": "Vaqti vaqti bilan men o'zimning xech narsaga qodir emasligimga qat'iy ishonch xosil qilaman.",
      "cyr": "Вақти вақти билан мен ўзимнинг хеч нарсага қодир эмаслигимга қатъий ишонч хосил қиламан.",
      "rus": "Время от времени я твердо убежден в своей полной никчемности."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 8,
    "question": {
      "lat": "Menda xech qachon qonun bilan to'qnashish xoli bo'lmagan.",
      "cyr": "Менда хеч қачон қонун билан тўқнашиш холи бўлмаган.",
      "rus": "У меня никогда не было проблем с законом."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 9,
    "question": {
      "lat": "Men uchun xech qanday axamiyatga ega bo'lmagan raqamlarni tez-tez eslab qolaman (masalan, avtomashinalar raqamlari)",
      "cyr": "Мен учун хеч қандай ахамиятга эга бўлмаган рақамларни тез-тез эслаб қоламан (масалан, автомашиналар рақамлари)",
      "rus": "Я часто запоминаю числа, не имеющие для меня никакого значения (например, номера автомобилей)."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 10,
    "question": {
      "lat": "Bazan yolg'on gapiraman.",
      "cyr": "Базан ёлғон гапираман.",
      "rus": "Иногда я лгу."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 11,
    "question": {
      "lat": "Men, boshqa odamlardan ko'ra, ta'sirchanroqman.",
      "cyr": "Мен, бошқа одамлардан кўра, таъсирчанроқман.",
      "rus": "Я более впечатлителен, чем другие люди."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 12,
    "question": {
      "lat": "Tanishlarim orasida axamiyatli odamlarning bor bo'lishi menga yoqadi, nazarimda bu o'zimni obro'li ko'rsatadi.",
      "cyr": "Танишларим орасида ахамиятли одамларнинг бор бўлиши менга ёқади, назаримда бу ўзимни обрўли кўрсатади.",
      "rus": "Мне нравится, когда среди моих знакомых есть значимые люди, мне кажется, что это придает мне авторитет."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 13,
    "question": {
      "lat": "Taqdirning menga nisbatan muruvvatsizligi aniq.",
      "cyr": "Тақдирнинг менга нисбатан мурувватсизлиги аниқ.",
      "rus": "Несомненно, судьба ко мне неблагосклонна."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 14,
    "question": {
      "lat": "Menga ko'pincha, qiziqqonligim xaqida aytishadi.",
      "cyr": "Менга кўпинча, қизиққонлигим хақида айтишади.",
      "rus": "Мне часто говорят о моей вспыльчивости."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 15,
    "question": {
      "lat": "O'zim yaxshi tushunmagan narsalar to'g'risida gapirgan vaqtlarim ham bo'lgan.",
      "cyr": "Ўзим яхши тушунмаган нарсалар тўғрисида гапирган вақтларим ҳам бўлган.",
      "rus": "Бывало, что я говорил о вещах, в которых сам плохо разбираюсь."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 16,
    "question": {
      "lat": "Men odamlar bilan toqatimni tez yo'qotaman.",
      "cyr": "Мен одамлар билан тоқатимни тез йўқотаман.",
      "rus": "Я быстро теряю терпение с людьми."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 17,
    "question": {
      "lat": "Menga haqiqatan zarar yetkazmoqchi bo'lgan dushmanlarim yo'q.",
      "cyr": "Менга ҳақиқатан зарар етказмоқчи бўлган душманларим йўқ.",
      "rus": "У меня нет врагов, которые действительно хотели бы причинить мне вред."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 18,
    "question": {
      "lat": "Ba'zan eshitish qobiliyatim shunday zo'rayib ketadiki, bu xatto menga xalaqit beradi.",
      "cyr": "Баъзан эшитиш қобилиятим шундай зўрайиб кетадики, бу хатто менга халақит беради.",
      "rus": "Иногда мой слух обостряется настолько, что это даже мешает мне."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 19,
    "question": {
      "lat": "Bugun qilish mumkin bo'lgan ishni, ertaga qoldirgan xollarim ham bo'lib turadi.",
      "cyr": "Бугун қилиш мумкин бўлган ишни, эртага қолдирган холларим ҳам бўлиб туради.",
      "rus": "Бывало, что я откладывал на завтра то, что мог сделать сегодня."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 20,
    "question": {
      "lat": "Agar odamlar menga qarshi bo'lmaganlarida, men xayotda ko'proq narsaga erishgan bo'lardim.",
      "cyr": "Агар одамлар менга қарши бўлмаганларида, мен хаётда кўпроқ нарсага эришган бўлардим.",
      "rus": "Если бы люди не были против меня, я бы добился в жизни гораздо большего."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 21,
    "question": {
      "lat": "O'yinda men yutishni afzal ko'raman.",
      "cyr": "Ўйинда мен ютишни афзал кўраман.",
      "rus": "В игре я предпочитаю выигрывать."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 22,
    "question": {
      "lat": "Ko'rishni istamagan odamim bilan uchrashib qolmaslik uchun, ko'pincha yo'lning boshqa tomoniga o'tib olaman.",
      "cyr": "Кўришни истамаган одамим билан учрашиб қолмаслик учун, кўпинча йўлнинг бошқа томонига ўтиб оламан.",
      "rus": "Чтобы избежать встречи с человеком, которого я не хочу видеть, я часто перехожу на другую сторону улицы."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 23,
    "question": {
      "lat": "Vaqtning ko'p qismida o'zimni nimanidir noto'g'ri yoki yomon bajarib qo'ygandek xis qilaman.",
      "cyr": "Вақтнинг кўп қисмида ўзимни ниманидир нотўғри ёки ёмон бажариб қўйгандек хис қиламан.",
      "rus": "Большую часть времени я чувствую, что сделал что-то неправильно или плохо."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 24,
    "question": {
      "lat": "Agar kimdir ahmoqona gaplar gapirayotgan bo'lsa yoki o'z nodonligini boshqacha namoyon qilayotgan bo'lsa, men unga xatosini tushuntirishga urinaman.",
      "cyr": "Агар кимдир аҳмоқона гаплар гапираётган бўлса ёки ўз нодонлигини бошқача намоён қилаётган бўлса, мен унга хатосини тушунтиришга уринаман.",
      "rus": "Если кто-то говорит глупости или иначе проявляет свое невежество, я пытаюсь объяснить ему его ошибку."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 25,
    "question": {
      "lat": "Goxida, oldimda qiyinchiliklar shunday ko'payib ketganki, ularni yengishning iloji yo'qdek bo'lib tuyuladi.",
      "cyr": "Гохида, олдимда қийинчиликлар шундай кўпайиб кетганки, уларни енгишнинг иложи йўқдек бўлиб туюлади.",
      "rus": "Иногда передо мной скапливалось столько трудностей, что казалось невозможным их преодолеть."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 26,
    "question": {
      "lat": "Mexmonda, dasturxon atrofida, men o'zimni uydagidan ko'ra yaxshiroq tutaman.",
      "cyr": "Мехмонда, дастурхон атрофида, мен ўзимни уйдагидан кўра яхшироқ тутаман.",
      "rus": "В гостях за столом я веду себя лучше, чем дома."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 27,
    "question": {
      "lat": "Oilamda juda asabiy odamlar bor.",
      "cyr": "Оиламда жуда асабий одамлар бор.",
      "rus": "В моей семье есть очень нервные люди."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 28,
    "question": {
      "lat": "Agar mening muvaffaqiyatsizliklarimda kimdir aybdor bo'lsa, men uni jazosiz qoldirmayman.",
      "cyr": "Агар менинг муваффақиятсизликларимда кимдир айбдор бўлса, мен уни жазосиз қолдирмайман.",
      "rus": "Если кто-то виноват в моих неудачах, я не оставлю его безнаказанным."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 29,
    "question": {
      "lat": "Shuni tan olishim kerakki, vaqti-vaqti bilan arzimas narsalarni deb bezovta bo'laman.",
      "cyr": "Шуни тан олишим керакки, вақти-вақти билан арзимас нарсаларни деб безовта бўламан.",
      "rus": "Должен признать, что время от времени я беспокоюсь по пустякам."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 30,
    "question": {
      "lat": "Menga munozarani boshlashni yoki o'zim yaxshi tushunadigan masala bo'yicha fikr bildirishimni taklif qilsalar, men buni tortinmasdan qilaman.",
      "cyr": "Менга мунозарани бошлашни ёки ўзим яхши тушунадиган масала бўйича фикр билдиришимни таклиф қилсалар, мен буни тортинмасдан қиламан.",
      "rus": "Если мне предлагают начать дискуссию или высказать мнение по вопросу, в котором я хорошо разбираюсь, я делаю это без стеснения."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 31,
    "question": {
      "lat": "Men ko'pincha do'stlarim ustidan hazil qilaman.",
      "cyr": "Мен кўпинча дўстларим устидан ҳазил қиламан.",
      "rus": "Я часто шучу над своими друзьями."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 32,
    "question": {
      "lat": "Xayotim davomida o'z kasbimga bo'lgan munosabatim bir necha marta o'zgargan.",
      "cyr": "Хаётим давомида ўз касбимга бўлган муносабатим бир неча марта ўзгарган.",
      "rus": "За свою жизнь мое отношение к профессии менялось несколько раз."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 33,
    "question": {
      "lat": "Ba'zi masalalar muxokama qilinganida, men ko'p o'ylab o'tirmay, boshqalar fikriga qo'shilgan vaqtlarim bo'lgan.",
      "cyr": "Баъзи масалалар мухокама қилинганида, мен кўп ўйлаб ўтирмай, бошқалар фикрига қўшилган вақтларим бўлган.",
      "rus": "Бывали случаи, когда при обсуждении некоторых вопросов я соглашался с мнением других, не задумываясь."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 34,
    "question": {
      "lat": "Men ko'pincha, ishdagi yutuqlarni o'ziga qo'shib qo'yadigan, xatolarda esa boshqalarni ayblaydigan odamlar rahbarligida ishlaganman.",
      "cyr": "Мен кўпинча, ишдаги ютуқларни ўзига қўшиб қўядиган, хатоларда эса бошқаларни айблайдиган одамлар раҳбарлигида ишлаганман.",
      "rus": "Я часто работал под руководством людей, которые приписывали себе успехи в работе, а в ошибках винили других."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 35,
    "question": {
      "lat": "Boshqalar yig'ilgan va gaplashayotgan xonaga bemalol, xech qanday qo'rquvsiz kiraman.",
      "cyr": "Бошқалар йиғилган ва гаплашаётган хонага бемалол, хеч қандай қўрқувсиз кираман.",
      "rus": "Я без страха вхожу в комнату, где собрались и разговаривают другие люди."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 36,
    "question": {
      "lat": "Aynan menga nisbatan, ayniqsa ko'p xollarda, adolatsizlik qilishayotgandek tuyuladi.",
      "cyr": "Айнан менга нисбатан, айниқса кўп холларда, адолатсизлик қилишаётгандек туюлади.",
      "rus": "Мне кажется, что именно ко мне чаще всего относятся несправедливо."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 37,
    "question": {
      "lat": "Baland joyda tursam, menda pastga sakrash istagi paydo bo'ladi.",
      "cyr": "Баланд жойда турсам, менда пастга сакраш истаги пайдо бўлади.",
      "rus": "Когда я стою на высоте, у меня появляется желание прыгнуть вниз."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 38,
    "question": {
      "lat": "Tanishlarim orasida menga yoqmaydiganlari bor.",
      "cyr": "Танишларим орасида менга ёқмайдиганлари бор.",
      "rus": "Среди моих знакомых есть те, кто мне не нравится."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 39,
    "question": {
      "lat": "Ko'pincha rejalarim menga shunchalik bajarib bo'lmaydigan tuyulganki, ulardan voz kechishga to'g'ri kelgan.",
      "cyr": "Кўпинча режаларим менга шунчалик бажариб бўлмайдиган туюлганки, улардан воз кечишга тўғри келган.",
      "rus": "Часто мои планы казались мне настолько невыполнимыми, что от них приходилось отказываться."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 40,
    "question": {
      "lat": "Men tez-tez parishon va unutuvchan bo'lib turaman.",
      "cyr": "Мен тез-тез паришон ва унутувчан бўлиб тураман.",
      "rus": "Я часто бываю рассеянным и забывчивым."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 41,
    "question": {
      "lat": "Yomon kayfiyat xurujlari menda kamdan-kam bo'lib turadi.",
      "cyr": "Ёмон кайфият хуружлари менда камдан-кам бўлиб туради.",
      "rus": "Приступы плохого настроения у меня бывают редко."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 42,
    "question": {
      "lat": "Men ayollar bilan ishlashni afzal ko'rardim.",
      "cyr": "Мен аёллар билан ишлашни афзал кўрардим.",
      "rus": "Я бы предпочел работать с женщинами."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 43,
    "question": {
      "lat": "Bir o'zim qolganimda, o'zimni eng baxtli his qilaman.",
      "cyr": "Бир ўзим қолганимда, ўзимни энг бахтли ҳис қиламан.",
      "rus": "Я чувствую себя самым счастливым, когда остаюсь один."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 44,
    "question": {
      "lat": "Ba'zan, o'zimni yomon xis qilgan vaqtlarimda men jizzaki bo'laman.",
      "cyr": "Баъзан, ўзимни ёмон хис қилган вақтларимда мен жиззаки бўламан.",
      "rus": "Иногда, когда я плохо себя чувствую, я бываю раздражительным."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 45,
    "question": {
      "lat": "Ko'pincha shunday tushlar ko'ramanki, ularni hech kimga aytmaganim ma'qul.",
      "cyr": "Кўпинча шундай тушлар кўраманки, уларни ҳеч кимга айтмаганим маъқул.",
      "rus": "Часто я вижу такие сны, о которых лучше никому не рассказывать."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 46,
    "question": {
      "lat": "Mening e'tiqodim va qarashlarim qat'iydir.",
      "cyr": "Менинг эътиқодим ва қарашларим қатъийдир.",
      "rus": "Мои убеждения и взгляды тверды."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 47,
    "question": {
      "lat": "Men asabiy va jaxli tez odamman.",
      "cyr": "Мен асабий ва жахли тез одамман.",
      "rus": "Я нервный и вспыльчивый человек."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 48,
    "question": {
      "lat": "Buyumlarimni qaerga qo'yganligimni esdan chiqarishim meni jaxlimni chiqaradi.",
      "cyr": "Буюмларимни қаерга қўйганлигимни эсдан чиқаришим мени жахлимни чиқаради.",
      "rus": "Забывание о том, куда я положил свои вещи, злит меня."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 49,
    "question": {
      "lat": "Jaxlim chiqqan vaqtlar xam bo'ladi.",
      "cyr": "Жахлим чиққан вақтлар хам бўлади.",
      "rus": "Бывают времена, когда я злюсь."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 50,
    "question": {
      "lat": "Kuchli e'tiborni talab qiladigan ish menga yoqadi.",
      "cyr": "Кучли эътиборни талаб қиладиган иш менга ёқади.",
      "rus": "Мне нравится работа, требующая сильной концентрации внимания."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 51,
    "question": {
      "lat": "Ba'zan shunchalik xayajonlangan bo'lamanki, bir joyda o'tira olmayman.",
      "cyr": "Баъзан шунчалик хаяжонланган бўламанки, бир жойда ўтира олмайман.",
      "rus": "Иногда я бываю настолько взволнован, что не могу усидеть на месте."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 52,
    "question": {
      "lat": "Odobsiz yoki xattoki noo'rin xazil menda kulgu uyg'otadi.",
      "cyr": "Одобсиз ёки хаттоки ноўрин хазил менда кулгу уйғотади.",
      "rus": "Неприличная или даже неуместная шутка вызывает у меня смех."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 53,
    "question": {
      "lat": "Ba'zan miyamga shunday yomon fikrlar keladiki, ular xaqida xech kimga aytmaganim ma'qul.",
      "cyr": "Баъзан миямга шундай ёмон фикрлар келадики, улар хақида хеч кимга айтмаганим маъқул.",
      "rus": "Иногда мне в голову приходят такие плохие мысли, что лучше никому о них не говорить."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 54,
    "question": {
      "lat": "Ba'zan men valeriana, elenium yoki boshqa tinchlantiruvchi vositalar qabul qilaman.",
      "cyr": "Баъзан мен валериана, элениум ёки бошқа тинчлантирувчи воситалар қабул қиламан.",
      "rus": "Иногда я принимаю валерьянку, элениум или другие успокоительные средства."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 55,
    "question": {
      "lat": "Men serxarakat odamman.",
      "cyr": "Мен серхаракат одамман.",
      "rus": "Я подвижный человек."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 56,
    "question": {
      "lat": "Endi men hayotda nimagadir erishishga ishonishim qiyin.",
      "cyr": "Энди мен ҳаётда нимагадир эришишга ишонишим қийин.",
      "rus": "Теперь мне трудно поверить, что я чего-то добьюсь в жизни."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 57,
    "question": {
      "lat": "Ba'zan asabiylashib, o'zimni tuta olmay qoladigan xolatga yaqinligimni xis qilaman.",
      "cyr": "Баъзан асабийлашиб, ўзимни тута олмай қоладиган холатга яқинлигимни хис қиламан.",
      "rus": "Иногда, нервничая, я чувствую, что близок к тому, чтобы потерять контроль над собой."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 58,
    "question": {
      "lat": "Xatlarni o'qib bo'lib, darrov javob bermagan vaqtlarim xam bo'lgan.",
      "cyr": "Хатларни ўқиб бўлиб, дарров жавоб бермаган вақтларим хам бўлган.",
      "rus": "Бывали случаи, когда прочитав письма, я не сразу отвечал на них."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 59,
    "question": {
      "lat": "Xaftada bir marta yoki undan ham ko'proq men hayajonlanaman, asabiylashaman.",
      "cyr": "Хафтада бир марта ёки ундан ҳам кўпроқ мен ҳаяжонланаман, асабийлашаман.",
      "rus": "Раз в неделю или чаще я волнуюсь, нервничаю."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 60,
    "question": {
      "lat": "Biron bir ishni bajarayotganimda qo'llarim qaltirayotganligini sezaman.",
      "cyr": "Бирон бир ишни бажараётганимда қўлларим қалтираётганлигини сезаман.",
      "rus": "Выполняя какую-либо работу, я замечаю, что у меня дрожат руки."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 61,
    "question": {
      "lat": "Mening qo'llarim avvalgidek yengil va chaqqon.",
      "cyr": "Менинг қўлларим аввалгидек енгил ва чаққон.",
      "rus": "Мои руки такие же легкие и ловкие, как и прежде."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 62,
    "question": {
      "lat": "Siz muxim masalalar hal qilinayotganda tez-tez tashabbusni o'z qo'lingizga olasizmi.",
      "cyr": "Сиз мухим масалалар ҳал қилинаётганда тез-тез ташаббусни ўз қўлингизга оласизми.",
      "rus": "Часто ли вы берете инициативу в свои руки при решении важных вопросов?"
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 63,
    "question": {
      "lat": "Vaqtning ko'p qismida men umumiy qo'rkinlik sezaman.",
      "cyr": "Вақтнинг кўп қисмида мен умумий қўркинлик сезаман.",
      "rus": "Большую часть времени я испытываю общий страх."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 64,
    "question": {
      "lat": "Ba'zan, xijolat tortganimda kuchli terlayman va bu meni achchiqlantiradi.",
      "cyr": "Баъзан, хижолат тортганимда кучли терлайман ва бу мени аччиқлантиради.",
      "rus": "Иногда, когда я смущаюсь, я сильно потею, и это меня раздражает."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 65,
    "question": {
      "lat": "Atrofdagi odamlar achchig'ingizni chiqarishib, bir o'zingiz yolg'iz qolgingiz keladimi.",
      "cyr": "Атрофдаги одамлар аччиғингизни чиқаришиб, бир ўзингиз ёлғиз қолгингиз келадими.",
      "rus": "Бывает ли так, что окружающие злят вас, и вы хотите остаться в одиночестве?"
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 66,
    "question": {
      "lat": "O'zimni maxkum etilgan odam deb o'ylayman.",
      "cyr": "Ўзимни махкум этилган одам деб ўйлайман.",
      "rus": "Я считаю себя обреченным человеком."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 67,
    "question": {
      "lat": "Menda kimdandir yoki qaerdandir, masalan;magazindan biror narsani o'g'irlashdan o'zimni tutib turishim qiyin bo'lgan xolatlar bo'lgan.",
      "cyr": "Менда кимдандир ёки қаердандир, масалан;магазиндан бирор нарсани ўғирлашдан ўзимни тутиб туришим қийин бўлган холатлар бўлган.",
      "rus": "У меня были случаи, когда мне было трудно удержаться от того, чтобы украсть что-то у кого-то или откуда-то, например, в магазине."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 68,
    "question": {
      "lat": "Odatda o'zingizni notanish sharoitda to'g'ri yo'l tanlashga qiynalishingiz to'g'rimi.",
      "cyr": "Одатда ўзингизни нотаниш шароитда тўғри йўл танлашга қийналишингиз тўғрими.",
      "rus": "Правда ли, что вам обычно трудно выбрать правильный путь в незнакомой ситуации?"
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 69,
    "question": {
      "lat": "Men xar kuni boshqalarni xayratga soladigan darajada ko'p suv ichaman.",
      "cyr": "Мен хар куни бошқаларни хайратга соладиган даражада кўп сув ичаман.",
      "rus": "Я каждый день пью так много воды, что это удивляет других."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 70,
    "question": {
      "lat": "Nimanidir qilmoqchi bo'lganimda, qo'llarim qaltirayotganimni ko'pincha sezaman.",
      "cyr": "Ниманидир қилмоқчи бўлганимда, қўлларим қалтираётганимни кўпинча сезаман.",
      "rus": "Когда я хочу что-то сделать, я часто замечаю, что у меня дрожат руки."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 71,
    "question": {
      "lat": "Men o'zimni xayoti barbod bo'lgan odamman deb o'ylayman.",
      "cyr": "Мен ўзимни хаёти барбод бўлган одамман деб ўйлайман.",
      "rus": "Я считаю себя человеком, чья жизнь разрушена."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 72,
    "question": {
      "lat": "Nimanidir qilib, keyin qilagnimni bilmagan davrlarim xam bo'lgan.",
      "cyr": "Ниманидир қилиб, кейин қилагнимни билмаган даврларим хам бўлган.",
      "rus": "У меня тоже были периоды, когда я делал что-то, а потом не помнил, что сделал."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 73,
    "question": {
      "lat": "Vaqti-vaqti bilan menga miyam sekinroq ishlayotgandek tuyuladi.",
      "cyr": "Вақти-вақти билан менга миям секинроқ ишлаётгандек туюлади.",
      "rus": "Время от времени мне кажется, что мой мозг работает медленнее."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 74,
    "question": {
      "lat": "Men xamma narsani, boshqalarga qaraganda , chuqurroq his qilaman deb o'ylayman.",
      "cyr": "Мен хамма нарсани, бошқаларга қараганда , чуқурроқ ҳис қиламан деб ўйлайман.",
      "rus": "Я думаю, что чувствую все глубже, чем другие."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 75,
    "question": {
      "lat": "Goxida xech qanday sababsiz menda o'ziga xos quvnoqlik holati paydo bo'ladi.",
      "cyr": "Гохида хеч қандай сабабсиз менда ўзига хос қувноқлик ҳолати пайдо бўлади.",
      "rus": "Иногда без всякой причины у меня возникает своеобразное состояние веселья."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 76,
    "question": {
      "lat": "Ayrim narsalar meni shunday tashvishlantiradiki, men hatto ular xaqida gapirishga qiynalaman.",
      "cyr": "Айрим нарсалар мени шундай ташвишлантирадики, мен ҳатто улар хақида гапиришга қийналаман.",
      "rus": "Некоторые вещи меня так беспокоят, что мне даже трудно о них говорить."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 77,
    "question": {
      "lat": "Ba'zan asablarim menga pand beradi.",
      "cyr": "Баъзан асабларим менга панд беради.",
      "rus": "Иногда мои нервы подводят меня."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 78,
    "question": {
      "lat": "Atrofimdagi barcha narsa haqiqiy emas degan his menda tez-tez bo'lib turadi.",
      "cyr": "Атрофимдаги барча нарса ҳақиқий эмас деган ҳис менда тез-тез бўлиб туради.",
      "rus": "У меня часто возникает чувство, что все вокруг меня нереально."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 79,
    "question": {
      "lat": "Yaqin tanishimning muvaffaqqiyatlari haqida eshitsam, o'zimni omadsiz deb his qila boshlayman.",
      "cyr": "Яқин танишимнинг муваффаққиятлари ҳақида эшитсам, ўзимни омадсиз деб ҳис қила бошлайман.",
      "rus": "Услышав об успехах близкого знакомого, я начинаю чувствовать себя неудачником."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 80,
    "question": {
      "lat": "Miyamga yomon, ko'pincha dahshatli so'zlar keladiki va men ulardan qutula olmaydigan vaqtlarim ham bo'lgan.",
      "cyr": "Миямга ёмон, кўпинча даҳшатли сўзлар келадики ва мен улардан қутула олмайдиган вақтларим ҳам бўлган.",
      "rus": "В голову приходят плохие, часто ужасные слова, и бывали времена, когда я не мог от них избавиться."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 81,
    "question": {
      "lat": "Ba'zan nimadir qilib yoki aytib qo'yib, so'ng pushaymon bo'lmaslik uchun, u yoki bu odamdan uzoqroq yurishga xarakat qilaman.",
      "cyr": "Баъзан нимадир қилиб ёки айтиб қўйиб, сўнг пушаймон бўлмаслик учун, у ёки бу одамдан узоқроқ юришга харакат қиламан.",
      "rus": "Иногда, чтобы потом не сожалеть о сказанном или сделанном, я стараюсь держаться подальше от того или иного человека."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 82,
    "question": {
      "lat": "Ko'pincha, xatto hammasi men uchun yaxshi ketayotgan bo'lsa xam, men hamma narsaga befarqligimni sezaman.",
      "cyr": "Кўпинча, хатто ҳаммаси мен учун яхши кетаётган бўлса хам, мен ҳамма нарсага бефарқлигимни сезаман.",
      "rus": "Часто, даже если для меня все идет хорошо, я замечаю, что равнодушен ко всему."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": false
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": true
      }
    ]
  },
  {
    "id": 83,
    "question": {
      "lat": "Men har qanday qiyin vaziyatda ham o'zimni tuta bilaman va xotirjamlikni saqlayman.",
      "cyr": "Мен ҳар қандай қийин вазиятда ҳам ўзимни тута биламан ва хотиржамликни сақлайман.",
      "rus": "В любых сложных ситуациях я умею владеть собой и сохранять спокойствие."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 84,
    "question": {
      "lat": "Kollektivda ishlash va yangi insonlar bilan muloqot qilish menga doimo zavq bag'ishlaydi.",
      "cyr": "Коллективда ишлаш ва янги инсонлар билан мулоқот қилиш менга доимо завқ бағишлайди.",
      "rus": "Работа в коллективе и общение с новыми людьми всегда доставляет мне удовольствие."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 85,
    "question": {
      "lat": "Men berilgan vazifalarni o'z vaqtida va mas'uliyat bilan bajarishga qat'iy intilaman.",
      "cyr": "Мен берилган вазифаларни ўз вақтида ва масъулият билан бажаришга қатъий интиламан.",
      "rus": "Я твердо стремлюсь выполнять поставленные задачи своевременно и с ответственностью."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  },
  {
    "id": 86,
    "question": {
      "lat": "Kutilmagan muammolar yuzaga kelganda, men tushkunlikka tushmay, darhol samarali yechim izlayman.",
      "cyr": "Кутилмаган муаммолар юзага келганда, мен тушкунликка тушмай, дарҳол самарали ечим излайман.",
      "rus": "При возникновении непредвиденных проблем я не впадаю в уныние, а сразу ищу эффективное решение."
    },
    "options": [
      {
        "key": "a",
        "text": {
          "lat": "Ha",
          "cyr": "Ҳа",
          "rus": "Да"
        },
        "is_correct": true
      },
      {
        "key": "b",
        "text": {
          "lat": "Yo'q",
          "cyr": "Йўқ",
          "rus": "Нет"
        },
        "is_correct": false
      }
    ]
  }
];
