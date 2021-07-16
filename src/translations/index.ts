import enUS from './en-US.json';
import ptBR from './pt-BR.json';

interface Language {
  id: string;
  file: {};
}

const map: Array<Language> = [
  { id: 'en-US', file: enUS },
  { id: 'pt-BR', file: ptBR },
];

export default map;
