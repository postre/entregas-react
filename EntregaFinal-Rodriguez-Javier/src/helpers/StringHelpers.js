export class StringHelpers {

    static title(str){
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

    static date(date){
        return date.getDate().toString().padStart(2,'0')+'/'+date.getMonth().toString().padStart(2,'0')+'/'+date.getFullYear()+' '+date.getHours().toString().padStart(2,'0')+':'+date.getMinutes().toString().padStart(2,'0');
    }

}