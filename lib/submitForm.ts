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
  if (data.website) return true; // Pretend it was sent

  // TODO: replace [FORM_ID] with Formspree form ID
  const emailRes = await fetch('https://formspree.io/f/[FORM_ID]', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  // TODO: replace [BOT_TOKEN] and [CHAT_ID] with Telegram bot credentials
  const tgMessage = `📩 Новая заявка!\nИмя: ${data.name}\nКонтакт: ${data.contact}\nЗадача: ${data.task || 'Не указана'}\nUTM: ${data.utm_source || '-'} / ${data.utm_medium || '-'} / ${data.utm_campaign || '-'}`;

  await fetch(`https://api.telegram.org/bot[BOT_TOKEN]/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: '[CHAT_ID]',
      text: tgMessage,
    }),
  }).catch(() => {
    // Telegram notification is non-critical
  });

  return emailRes.ok;
}
