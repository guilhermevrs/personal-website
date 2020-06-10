import moment from "moment";

moment.defineLocale("pt-br", {
  months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split(
    "_"
  ),
  monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
  weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split(
    "_"
  ),
  weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
  weekdaysMin: "dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    L: "DD/MM/YYYY",
    LL: "D [de] MMMM [de] YYYY",
    LLL: "D [de] MMMM [de] YYYY [às] LT",
    LLLL: "dddd, D [de] MMMM [de] YYYY [às] LT",
  },
  calendar: {
    sameDay: "[Hoje às] LT",
    nextDay: "[Amanhã às] LT",
    nextWeek: "dddd [às] LT",
    lastDay: "[Ontem às] LT",
    lastWeek: function () {
      return this.day() === 0 || this.day() === 6
        ? "[Último] dddd [às] LT" // Saturday + Sunday
        : "[Última] dddd [às] LT"; // Monday - Friday
    },
    sameElse: "L",
  },
  relativeTime: {
    future: "em %s",
    past: "%s atrás",
    s: "segundos",
    m: "um minuto",
    mm: "%d minutos",
    h: "uma hora",
    hh: "%d horas",
    d: "um dia",
    dd: "%d dias",
    M: "um mês",
    MM: "%d meses",
    y: "um ano",
    yy: "%d anos",
  },
  ordinal: "%dº",
});

const PortugueseLocale = moment();
PortugueseLocale.locale('pt-br');

export default PortugueseLocale;
