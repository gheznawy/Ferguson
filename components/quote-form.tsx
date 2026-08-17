import { Icon } from "./icons";
import { Button } from "./ui/button";
import { SelectField, TextareaField, TextField } from "./ui/form-controls";

type QuoteFormProps = {
  compact?: boolean;
  heading?: string;
  description?: string;
};

export function QuoteForm({
  compact = false,
  heading = "Get a Free Quote",
  description = "Tell us what you need and we’ll get back to you quickly.",
}: QuoteFormProps) {
  return (
    <form className={`quote-form${compact ? " quote-form--compact" : ""}`}>
      <div className="quote-form__heading">
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
      <div className="quote-form__grid">
        <TextField id="first-name" name="firstName" label="First Name" autoComplete="given-name" required />
        <TextField id="last-name" name="lastName" label="Last Name" autoComplete="family-name" required />
        <TextField id="phone" name="phone" label="Phone Number" type="tel" autoComplete="tel" required />
        <TextField id="email" name="email" label="Email Address" type="email" autoComplete="email" />
        <SelectField id="service" name="service" label="Service Needed" defaultValue="" required>
          <option value="" disabled>Select a Service...</option>
          <option value="ac-repair">A/C Repair & Diagnostics</option>
          <option value="maintenance">HVAC Maintenance</option>
          <option value="commercial">Commercial HVAC Service</option>
          <option value="replacement">HVAC Replacement & Installation</option>
          <option value="maintenance-plan">Ferguson&apos;s Maintenance Plan</option>
          <option value="other">Other HVAC Service</option>
        </SelectField>
        <TextField id="city" name="city" label="City" autoComplete="address-level2" required />
        <TextareaField className="quote-form__message" id="message" name="message" label="How can we help?" rows={4} />
      </div>
      <Button className="quote-form__submit" type="submit">
        <Icon name="send" width={17} height={17} />
        Get a Free Quote
      </Button>
    </form>
  );
}
