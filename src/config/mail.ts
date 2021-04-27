interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'filipedantas90@hotmail.com',
      name: 'Filipe da equipe goBarber',
    },
  },
} as IMailConfig;
