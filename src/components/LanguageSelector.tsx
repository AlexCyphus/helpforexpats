export function LanguageSelector() {
  return (
    <select className="flex-grow p-2 border rounded appearance-none bg-white">
      <option value="">Select a language...</option>
      <option value="english">🇬🇧 English</option>
      <option value="german">🇩🇪 German</option>
      <option value="spanish">🇪🇸 Spanish</option>
      <option value="french">🇫🇷 French</option>
      <option value="italian">🇮🇹 Italian</option>
      {/* Add more languages as needed */}
    </select>
  );
}