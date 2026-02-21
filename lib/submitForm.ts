interface FormData {
  name: string;
  contact: string;
  task?: string;
  website?: string; // honeypot
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

export async function submitForm(data: FormData): Promise<boolean> {
  // Honeypot check
  if (data.website) return true;

  // Отправка заявки на f94590@gmail.com через Formsubmit (бесплатно, без регистрации)
  const res = await fetch('https://formsubmit.co/ajax/f94590@gmail.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      _subject: '🚀 Новая заявка с сайта AI Business Systems',
      name: data.name,
      contact: data.contact,
      task: data.task || 'Не указана',
      utm_source: data.utm_source || '-',
      utm_medium: data.utm_medium || '-',
      utm_campaign: data.utm_campaign || '-',
    }),
  });

  return res.ok;
}
