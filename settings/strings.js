export function getStrings(lang, type){
  switch (lang){
    case "es":
      return {
        "Heading & Time"                : "Título",
        "Date Format"                   : "Formato de Fecha",
        "Wed, Jan 31"                   : "Mx, 31 de Enero",
        "Jan 31, 2018"                  : "31 de Enero, 2018",
        "Wed 31 Jan"                    : "Mx, 31 de Enero",
        "Wednesday 31 Jan"              : "Miércoles 31 de Enero",
        "Wednesday 31"                  : "Miércoles 31",
        "31 Jan 2018"                   : "31 de Enero, 2018",
        "Battery Bar"                   : "Cambia Barra de Batería a Porcentaje",
        "Force 24 Hour Time"            : "Force 24 Hour Time",
        "Time Format"                   : "Time Format",
        "12:00 am (only 12 hour time)"  : "12:00 am (only 12 hour time)",
        "Weather"                       : "Tiempo",
        "Celsius"                       : "Fijar Temperatura a Centígrado",
        "weather scrolling"             : "Desactivar Desplazamiento de Tiempo",
        "location scrolling"            : "Desactivar Desplazamiento de Ubicación",
        "Weather Update Interval"       : "Intervalo de Actualización de Tiempo",
        "Location Update Interval"      : "Intervalo de Actualización de Ubicación", 
        "5 minutes"                     : "5 minutos",
        "15 minutes"                    : "15 minutos",
        "30 minutes"                    : "30 minutos",
        "1 hour"                        : "1 hora",
        "2 hours"                       : "2 horas",
        "WATCH battery"                 : "Disminución resultará en aumento de uso de batería de RELOJ.",
        "PHONE battery"                 : "Disminución resultará en aumento de uso de batería de MÓVIL.",
        "update time"                   : "Mostrar último actualización de tiempo",	
        "high low color"                : "Turn off High and Low color",
        "fetched time"                  : "Show when fetching weather",																								
        "nerds and debugging"           : "Para expertos o ñoños/sacar errores.",
        "Separator Bar Color"           : "Color de Barra de Separación",
        "Image"                         : "Imagen",
        "None"                          : "Ninguna",
        "Rainbow"                       : "Rainbow",
        "Glass"                         : "Glass",
        "Glass Rainbow"                 : "Glass Rainbow",
        "Wood 1"                        : "Wood 1",
        "Wood 2"                        : "Wood 2",
        "Wood 3"                        : "Wood 3",
        "Candy Cane 1"                  : "Candy Cane 1",
        "Candy Cane 2"                  : "Candy Cane 2",
        "Effect"                        : "Effect",
        "Custom Range Colors"           : "Custom Range Colors",
        "Low Color"                     : "Low Color",
        "Medium Color"                  : "Medium Color",
        "High Color"                    : "High Color",
        "Complete Color"                : "Complete Color",
        "Contact Me"                    : "Favor de no vacilar en contactarme con preguntas o sugerencias; déjeme saber a cualquiér app o esfera de reloj se refiera.  Éste y todos mis apps siempre serán gratis y Código Abierto. Si le gusta mucho el app, favor de comprarme un café (o sea un componente electrónico para mis clases). ¡Gracias!",
        "Email"                         : "Correo Electrónico",
        "Build Version"                 : "Versión y Apuntes (Sólo Inglés)",
        "Reset Data"                    : "Reset Data",
        "Activities"                    : "Activities",
        "rhr"                           : "Hide Resting Heart Rate"
      }
    case "zh":
      return {
        "Heading & Time"                : "上方欄位",
        "Date Format"                   : "日期格式",
        "Wed, Jan 31"                   : "週三, 1月31日",
        "Jan 31, 2018"                  : "1月31日,2018年",
        "Wed 31 Jan"                    : "週三, 1月31日",
        "Wednesday 31 Jan"              : "週三 1月31日",
        "Wednesday 31"                  : "週三 31日",
        "31 Jan 2018"                   : "1月31日,2018年",
        "Battery Bar"                   : "更改電量顯示方式為百分比",
        "Force 24 Hour Time"            : "Force 24 Hour Time",
        "Time Format"                   : "Time Format",
        "12:00 am (only 12 hour time)"  : "12:00 am (only 12 hour time)",
        "Weather"                       : "日期欄位",
        "Celsius"                       : "設定氣溫單位為攝氏",
        "weather scrolling"             : "關閉天氣捲動顯示功能",
        "location scrolling"             : "關閉位置捲動顯示功能",
        "Weather Update Interval"       : "更新天氣的間隔時間",
        "Location Update Interval"      : "更新位置的間隔時間", 
        "5 minutes"                     : "每5分鐘一次",
        "15 minutes"                    : "每15分鐘一次",
        "30 minutes"                    : "每30分鐘一次",
        "1 hour"                        : "每1小時一次",
        "2 hours"                       : "每2小時一次",
        "WATCH battery"                 : "減少更新的間隔時間,將會耗費手錶更多的電力",
        "PHONE battery"                 : "減少更新的間隔時間,將會耗費手機更多的電力",
        "update time"                   : "顯示天氣資訊最後成功更新的時間",
        "fetched time"                  : "Show when weather is fetched",						
        "high low color"                : "Turn off High and Low color",																			
        "nerds and debugging"           : "這些資訊主要用於除錯",
        "Separator Bar Color"           : "分隔線的顏色",
        "Image"                         : "图片",
        "None"                          : "没有",
        "Rainbow"                       : "彩虹",
        "Glass"                         : "Glass",
        "Glass Rainbow"                 : "Glass Rainbow",
        "Wood 1"                        : "Wood 1",
        "Wood 2"                        : "Wood 2",
        "Wood 3"                        : "Wood 3",
        "Candy Cane 1"                  : "Candy Cane 1",
        "Candy Cane 2"                  : "Candy Cane 2",
        "Effect"                        : "Effect",
        "Custom Range Colors"           : "Custom Range Colors",
        "Low Color"                     : "Low Color",
        "Medium Color"                  : "Medium Color",
        "High Color"                    : "High Color",
        "Complete Color"                : "Complete Color",
        "Contact Me"                    : "P有任何問題時,歡迎與我聯繫,但也麻煩您提供使用上遇到的問題,還有問題是發生在哪個應用或是表盤,這個程式將永遠免費且為開源軟體,若您真的喜歡這軟體,可以考慮買一杯咖啡送我(或是像一些電子零件,這些最終出現我的教室裡),謝謝",
        "Email"                         : "電子信箱",
        "Build Version"                 : "版本號說明資訊(只提供英文說明)",
        "Reset Data"                    : "Reset Data",
        "Activities"                    : "Activities",
        "rhr"                           : "Hide Resting Heart Rate"
      }
    default:
      return {
        "Heading & Time"                : "Heading & Time",
        "Date Format"                   : "Date Format",
        "Wed, Jan 31"                   : "Wed, Jan 31",
        "Jan 31, 2018"                  : "Jan 31, 2018",
        "Wed 31 Jan"                    : "Wed 31 Jan",
        "Wednesday Jan 31"              : "Wednesday Jan 31",
        "Wednesday 31"                  : "Wednesday 31",
        "31 Jan 2018"                   : "31 Jan 2018",
        "Battery Bar"                   : "Change Battery Bar to Battery %",
        "Force 24 Hour Time"            : "Force 24 Hour Time",
        "Time Format"                   : "Time Format",
        "12:00 am (only 12 hour time)"  : "12:00 am (only 12 hour time)",
        "Weather"                       : "Weather",
        "Celsius"                       : "Set Temperature units to Celsius",
        "weather scrolling"             : "Disable weather scrolling",
        "location scrolling"             : "Disable location scrolling",
        "Weather Update Interval"       : "Weather Update Interval",
        "Location Update Interval"      : "Location Update Interval", 
        "5 minutes"                     : "5 minutes",
        "15 minutes"                    : "15 minutes",
        "30 minutes"                    : "30 minutes",
        "1 hour"                        : "1 hour",
        "2 hours"                       : "2 hours",
        "WATCH battery"                 : "Decreasing this will use more WATCH battery.",
        "PHONE battery"                 : "Decreasing this will use more PHONE battery.",
        "update time"                   : "Show time of last weather update",
        "fetched time"                  : "Show when weather is fetched",			
        "high low color"                : "Turn off High and Low color",
        "nerds and debugging"           : "These are mostly for information for nerds and debugging.",
        "Separator Bar Color"           : "Separator Bar Color",
        "Image"                         : "Image",
        "None"                          : "None",
        "Rainbow"                       : "Rainbow",
        "Glass"                         : "Glass",
        "Glass Rainbow"                 : "Glass Rainbow",
        "Wood 1"                        : "Wood 1",
        "Wood 2"                        : "Wood 2",
        "Wood 3"                        : "Wood 3",
        "Candy Cane 1"                  : "Candy Cane 1",
        "Candy Cane 2"                  : "Candy Cane 2",
        "Effect"                        : "Effect",
        "Custom Range Colors"           : "Custom Range Colors",
        "Low Color"                     : "Low Color",
        "Medium Color"                  : "Medium Color",
        "High Color"                    : "High Color",
        "Complete Color"                : "Complete Color",
        "Contact Me"                    : "Please don't hesitate to contact me with questions or suggestions; but be sure to let me know which app or watchface you are talking about. This and all my other apps will always be free and Open Source. If you really like my app please consider buying me a coffee (or more likely electronic components that end up in my classroom). Thanks!",
        "Email"                         : "Email",
        "Build Version"                 : "Build Version and Notes (English Only)",
        "Reset Data"                    : "Reset Data",
        "Activities"                    : "Activities",
        "rhr"                           : "Hide Resting Heart Rate"
      }
  }
}