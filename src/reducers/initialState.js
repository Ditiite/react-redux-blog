// Reducer is basically just a piece of data to save in store
export const initialState = {
    activePost: {},
    posts: [
        {
            id: 1,
            title: 'Saplaisājušie šokolādes cepumi',
            text: '1. Miltus sajauc ar kakao pulveri un pūdercukuru, sāli un cepamo pulveri. Pievieno mīkstu sviestu un ar pirkstu galiem iemīca to mīklā. Olas sakuļ kopā ar vaniļas ekstraktu (var izmantot arī vaniļas pāksti), pievieno mīklai un visu labi samīca, līdz veidojas spīdīga tumšas šokolādes krāsas mīkla. Ietin to pārtikas plēvē un uz 30 minūtēm ievieto ledusskapī. 2.No mīklas veido valrieksta lieluma bumbiņas, apviļā tās pūdercukurā, liek uz cepam papīra un cep cepeškrāsnī, 180 grādos 12 minūtes. 3.Cepumi ir veltīti visiem šokolādes mīļotājiem, labu apetīti!10Pildījumam ņem tikai skābo krējumu + cukuru. Uz šo daudzumu vajadzīgs ~ 1 l skābā krējuma, varbūt bišku vairāk (es ņemu 25% krējumu, jo tas ir biezāks, vieglāk ieklājas) + 1 glāze cukura. Cukuru pievieno pēc garšas - cits vēlas mazāk saldu, cits vairāk. 11.Ņem saceptās kārtas, kurās pilda to krējumu, kas samaisīts ar cukuru, + vēl apbārsta ar sasmalcinātiem valriekstiem. Tos es parasti gan lieku katrā otrajā kārtā. 12.Respektīvi sanāk: pankūka - krējums - rieksti - pankūka - krējums - pankūka - krējums - rieksti - pankūka... Un tā - kamēr visas pančenes izbeidzas. 13.Rezultātā sanāk vienkārši klasiska medus kūka, tas galvenais, kas man viņā patīk ir tās daudzās pankūciņas un skābais krējums, tā kūka tāda nu, tāda kā friša liekas. Nu, tādas, bez trekniem vārītiem krēmiem utt. .14.* viens no galvenajiem vīramātes ieteikumiem - neko no produktiem nevajag žēlot, īpaši krējumu - to vajag smērēt bagātīgi, tad tā kūka tāda slapja sanāk un brrrrrrrrieeeaaaasmīgi garšīga!',
            category: 'cepumi',
            ingredients: [
                {
                    amount: '150d',
                    ingredient: 'milti'
                },
                {
                    amount: '60g',
                    ingredient: 'kakao'
                },
                {
                    amount: '200g',
                    ingredient: 'pūdercukurs'
                },
                {
                    amount: '60g',
                    ingredient: 'sviests'
                },
                {
                    amount: '1 tk',
                    ingredient: 'cepamais pulversis'
                },
                {
                    amount: '2 gab',
                    ingredient: 'olas'
                },
                {
                    amount: '1 tk',
                    ingredient: 'vaniļas ekstrakts'
                },
                {
                    amount: '1/2 tk',
                    ingredient: 'sāls'
                },
                {
                    amount: '100g',
                    ingredient: 'pūdercukurs apviļāšanai'
                }
            ],
            likes: 0,
            src: "cookies2"
        },
        {
            id: 2,
            title: 'Vīramātes medus kūka',
            text: 'Medu izkausē ūdens peldē, līdz ir pavisam šķidrs kā sīrups (atzīstos godīgi - es nekausēju ūdens peldē, bet vienkārši katliņā uz mazas, mazas uguns).Medum pievieno 1 tējkaroti ar kaudzi sodas. (Tā to medu riktīgi uzpūtīs tā, ka gandrīz no katliņa rāpsies ārā).Pievieno 3 sakultas olas. Samaisa, katliņa saturs sakritīs tajā atpakaļ (pie nosacījuma, ja tas jau nav pārskrējis pāri katliņa malām un nepievilcīgā paskatā neatrodas uz plīts virsmas). Tas viss sanāk diezgan pašķidrs.Liek klāt miltus. Receptē bija rakstīts 3 glāzes, bet es parasti pielieku 2 - 2,5 glāzes.5.Kārtīgi sakuļ, tai masai jābūt diezgan pacietai, tādai pavisam ne viegli maisāmai. Viņa sanāk tāda riktīgi pabieza. 6.Tad sagatavoju 2 - 3 apaļo cepampannu pamatnītes. 7.Ņem pa vienai, smērē virsū ~ 1 ēdamkaroti mīklas. Smērēju ar tādu platu lāpstiņu, jo jāuzsmērē pēc iespējas plānākā kārtiņā un par cik mīkla ir tāda pabieza, tad nu tā vienkārši viņu neuzklāsi. 8.Kamēr viena panna cepas, tikmēr apsmērēju otru. 9.Katra kārta cepas ļoti ātri - ~ 3 minūtes. No šitās porcijas sanāk ~ 10 - 12 tādas kā plānas pankūciņas. Tas viss atkarīgs, cik daudz mīklas sanācis, cik tā šķidra /cieta un kā klājusies uz pannām.',
            category: 'torte',
            ingredients: [
                {
                    amount: '1 gl',
                    ingredient: 'medus'
                },
                {
                    amount: '1 tk',
                    ingredient: 'soda'
                },
                {
                    amount: '3 gab.',
                    ingredient: 'olas'
                },
                {
                    amount: '2 gl',
                    ingredient: 'milti'
                },
                {
                    amount: '1 gl',
                    ingredient: 'skābs krējums 25%'
                }
            ],
            likes: 10,
            src: ""
        }
    ],
    currentId: 2
};
